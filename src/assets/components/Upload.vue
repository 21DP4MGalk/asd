<script setup>

const props = defineProps({
	name:  String,
	m_date: String,
	description: String,
	size: Number
})

</script>

<template>
	<div>
	<p>Name: {{ upload.name }}
Upload date: {{ upload.m_date }}
Size: {{upload.size}} MB
Short description: {{ upload.description }}
	</p>
	</div>
</template>

<style scoped>
div{
width: 70%;
height: 25%;
background-color:yellow;
}
</style>
