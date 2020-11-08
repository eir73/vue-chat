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
          <strong>{{(new Date()).toLocaleTimeString()}}</strong>
        </small>
        <p>{{text}}</p>
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
    width: 0px;
    min-width: 30%;
    padding: 1rem;
    margin: 0 1rem 1rem;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    border-radius: 4px;
    background-color: #1976d2;

    small {
      display: flex;
      justify-content: space-between; 
    }

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