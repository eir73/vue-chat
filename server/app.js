const { measureMemory } = require('vm')

const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const users = require('./users')()

const message = (name, text, id) => ({name, text, id})

io.on('connection', socket => {
  
  socket.on('userJoined', (data, callback) => {
    if (!data.name || !data.room) {
      return callback('Data is not valid')
    }

    socket.join(data.room)

    users.add({
      id: socket.id,
      name: data.name,
      room: data.room
    })

    callback({userId: socket.id})
    socket.emit('newMessage', message('impossibleUserName', `Welcome, ${data.name}.`))
    socket.broadcast
      .to(data.room)
      .emit('newMessage', message('impossibleUserName', `User ${data.name} has joined.`))
  })

  socket.on('createMessage', (data, callback) => {
    if (!data.text) {
      return callback('Enter the message')
    }
    const user = users.get(data.id)

    if (user) {
      io.to(user.room).emit('newMessage', message(user.name, data.text, data.id))
    }

    callback()
  })
})

module.exports = {
  app,
  server
}
