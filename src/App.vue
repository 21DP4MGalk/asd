<script setup>
import { RouterLink, RouterView } from 'vue-router'
<<<<<<< HEAD
=======
import footer from './views/footer.vue'
>>>>>>> d339b3dbf0e22abb2db9825272055b57a6bd2859
</script>

<template>
  <header>
<<<<<<< HEAD
      <nav align="center">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
	<RouterLink to="/register">Register</RouterLink>
	<RouterLink to="/login">Login</RouterLink>
	<RouterLink to="/wood">The Woodworking Services</RouterLink>
	<RouterLink to="/programs">The Software</RouterLink>
	<a href="mailto:email@email.mail">Contact</a>
	<a href="https://www.youtube,com/watch?v=5vRlJrkxsqo">What this site is</a>
      </nav>
      <br><br><br>
  </header>
  <RouterView />
=======
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
  <footer />
>>>>>>> d339b3dbf0e22abb2db9825272055b57a6bd2859
</template>

<style scoped>
a {
<<<<<<< HEAD
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

=======
	margin-left: 5px;
	margin-right: 3px;
}
>>>>>>> d339b3dbf0e22abb2db9825272055b57a6bd2859
</style>
