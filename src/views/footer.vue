<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<footer>
		<RouterLink to="/">Home</RouterLink>
		<a href="mailto:email@email.mail">Our email</a>
		<a href="https://google.com">Our sister site</a>
		<a href="https://vuejs.org">This site's made with vue unfortuntely, so I thought I'd mention it</a>
		<a href="https://gentoo.org">For the documentation that allowed to me to get a working os on my PC</a>
	</footer>
</template>

<style scoped>
a{
	font-size: 3px;
	color:white;
}
footer{
	background-color: #2f2f2f;
	height: 120px;
	width: 100%;
}
</style>
