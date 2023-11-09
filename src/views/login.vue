<script>
</script>

<template>
	<center>
		<h1>Log in to our precious bad useless website</h1>
		<h3>DO IT NOW</h3>
	</center>
	<form>
		<label for='uname'>Username or email</label>
		<input type='text' id='uname' required> <br>
		<label for='pwd'>Password</label>
		<input type='password' id='pwd' minlength="10" required placeholder="At least 10 characters"> <br>
		<input type='submit' value='Login' id='submit'> <br>
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
