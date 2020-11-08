<template>
  <div class="message">
    <div class="message__system" v-if="name === 'impossibleUserName'">
      <p class="text-xs-center">{{ text }}</p>
      <v-divider></v-divider>
    </div>
    <div v-else class="message__common">
      <div class="message__body" :class="{ owner }">
        <small>
          <strong>{{ name }}</strong>
        </small>
        <p>text</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    text: String,
    owner: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="stylus">
.message {
  &__system {
    margin-bottom: 1rem;

    p {
      margin-bottom: 1rem;
    }
  }

  &__common {
    display: flex;
    flex-direction: column;
  }

  &__body {
    position: relative;
    max-width: 60%;
    min-width: 30%;
    padding: 1rem;
    margin: 0 1rem 1rem;
    box-shadow: 0 1 0 0 rgba(50, 50, 50, 0.3);
    border-radius: 4px;
    background-color: #1976d2;

    p {
      margin-bottom: 0;
    }
  }

  .owner {
    background-color: #f0f1f0;
    color: #000000;
    align-self: flex-end;
  }
}
</style>