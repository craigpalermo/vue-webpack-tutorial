<template>
    <div>
        <h2>{{ message }}</h2>
        <app-input :msg="message" @messageChanged="message = $event"></app-input>
    </div>
</template>

<script>
import Input from './Input.vue';

export default {
  data() {
    return {
      message: 'Type to change the message',
    }
  },
  components: {
    'app-input': Input,
  }
}
</script>