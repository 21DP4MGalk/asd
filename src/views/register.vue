<script>
</script>

<template>
	<form>
		<label for='uname'>Username</label>
		<input type='text' id='uname' required> <br>
		<label for='email'>E-mail (optional)</label>
		<input type='text' id='email'> <br>
		<label for='pwd'>Password</label>
		<input type='password' id='pwd' minlength="10" required placeholder="At least 10 characters"> <br>
		<label for='pwd_confirm'>Confirm the password:</label>
		<input type='password' id='pwd_confirm' minlength="10" required> <br>
		<input type='submit' value='Register'> <br>
	</form>
</template>

<style>
</style>
