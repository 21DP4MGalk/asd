<script setup>
//secret cheese is secret
</script>

<template>
	<center>
	<h1>Join our completely useless website</h1>
	<h4>Every new account contributes to downfall of JS</h4>
	</center>
	<form action='/' method='POST'>
		<label for='uname'>Username</label>
		<input name='uname' type='text' id='uname' required> <br>
		<label for='email'>E-mail (optional)</label>
		<input name='email' type='text' id='email'> <br>
		<label for='pwd'>Password</label>
		<input name='pwd' type='password' id='pwd' minlength="10" required placeholder="At least 10 characters"> <br>
		<label for='pwd_confirm'>Confirm the password:</label>
		<input type='password' id='pwd_confirm' minlength="10" required> <br>
		<input type='submit' value='Register now' id="submit"> <br>
	</form>
</template>

<style scoped>
h1{
	font-size: 50px;
}
label{
margin-left: 40%;
display: BLOCK;
height: 12px;
}
input{
float: right;
margin-right: 30%;
display:BLOCK;
}
input#submit{
margin-right: 30%;
margin-left: 40%;
margin-top: 7px;
width: 30%;
height: 25px;
}
</style>
