<template>
    <div>
        <h2>Users Overview</h2>
        <p>Team ID is: {{ $route.params.teamId }}</p>
        <button @click="goHome">Go home</button>
    </div>
</template>

<script>
  export default {
    watch: {
      '$route'(to) {
        console.log(`Went to ${to.params.teamId}`);
      },
    },
    created() {
      console.log(`Started with team ${this.$route.params.teamId}`);
    },
    methods: {
      goHome() {
        this.$router.push('/');
      },
    },
  }
</script>