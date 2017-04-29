<template>
  <div id="app">
    <h1>Sample VueJS 2 Application</h1>
    <hr>
    <router-link to="/">Home</router-link>
    <router-link to="/message">Message</router-link>
    <router-link to="/users/4">Users for team 4</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
