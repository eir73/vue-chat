const { measureMemory } = require('vm')

const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const message = (name, text, id) => ({name, text, id})

io.on('connection', socket => {
  
  socket.on('userJoined', (data, callback) => {
    if (!data.name || !data.room) {
      return callback('Data is not valid')
    }

    socket.join(data.room)

    callback({userId: socket.id})
    socket.emit('newMessage', message('admin', `Welcome, ${data.name}.`))
    socket.broadcast
      .to(data.room)
      .emit('newMessage', message('admin', `User ${data.name} has joined.`))
  })

  socket.on('createMessage', data => {
    setTimeout(() => {
      socket.emit('newMessage', {
        text: data.text + ' SERVER'
      })
    }, 500)
  })
})

module.exports = {
  app,
  server
}
