<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav align="center">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
	<RouterLink to="/register">Register</RouterLink>
	<RouterLink to="/login">Login</RouterLink>
	<RouterLink to="/wood">The Woodworking Services</RouterLink>
	<RouterLink to="/programs">The Software</RouterLink>
	<a href="mailto:email@email.mail">Contact</a>
	<a href="https://www.youtube.com/watch?v=5vRlJrkxsqo">What this site is</a>
      </nav>
      <br><br><br>
  </header>
  <RouterView />
</template>

<style scoped>
a {
	padding-left: 5px;
	padding-right: 5px;
	padding-top: 5px;
	padding-bottom: 5px;
	background-color: #000015;
	color: #EFEFEF;
	transition: color 0.5s, background-color 0.5s;
	font-size: 19px;
	text-decoration: none
}


a:hover{
	background-color: #EFEFEF;
	color: #000015;
}
a.router-link-exact-active{
	text-decoration: underline;
	background-color: #EFEFEF;
	color: #000015;

}

</style>
