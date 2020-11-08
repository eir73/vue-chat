<template>
  <v-text-field
    label="Solo"
    placeholder="Enter your message"
    solo
    @keydown.enter="send"
    v-model="text"
  ></v-text-field>
</template>

<script>
export default {
  data: () => ({
    text: ''
  }),
  methods: {
    send() {
      this.$socket.emit('createMessage', {
        text: this.text,
        id: this.$store.state.user.id,
      }, data => {
        if (typeof data === 'string') {
          console.error(data)
        } else {
          this.text = ''
        }
      })
    }
  }
}
</script>

<style>

</style>