<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
	<RouterLink to="/register">Register</RouterLink>
	<RouterLink to="/register">Login</RouterLink>
	<RouterLink to="/wood">The Woodworking Services</RouterLink>
	<RouterLink to="/programs">The Software</RouterLink>
	<RouterLink to="/code">The Open Source Code</RouterLink>
	<a href="mailto:email@email.mail">Contact</a>
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>
a {
	margin-left: 5px;
	margin-right: 3px;
}
</style>
