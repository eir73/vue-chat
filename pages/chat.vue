<template>
  <div class="chat">
    <div class="chat__content">
      <Message 
        v-for="message in messages" 
        :key="message.text"
        :name="message.name"
        :text="message.text"
        owner
      />
    </div>
    <div class="chat__form">
      <ChatForm />
    </div>
  </div>
</template>

<script>
import Message from '@/components/Message'
import ChatForm from '@/components/ChatForm'
import { mapState } from "vuex";

export default {
  middleware: ["chat"],
  head() {
    return {
      title: `room: ${this.user.room}`,
    };
  },
  computed: mapState(["user", "messages"]),
  components: {
    Message
  }
};
</script>

<style lang="stylus">
.chat {
  position relative
  height 100%
  overflow hidden

  &__content {
    position absolute
    top 0
    left 0
    right 0
    bottom 80px
    padding 1rem
    overflow-y auto
  }

  &__form {
    position absolute
    bottom 0
    left 0
    right 0
    padding 1rem
    height 80px
    background #212121
  }
}
</style>