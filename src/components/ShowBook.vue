<template>
	<div>

		<h3> Woo You</h3>
		<p> You cant see it, bye bye</p>

		<router-link :to="{ name: 'AllBooks' }">All Books</router-link>	
	</div>
</template>

<script>
	/* eslint-disable */

	export default {
		name: 'ShowBook',
		data: ()=>({
			books: ""
		}),
		created(){
			this.getBooks()
		},
		methods:{
			getBooks() {
				fetch('books.json')
				.then(response => response.json() )
				.then(data => console.log(data))
				
			}
		}
	}
</script>

<style>
	div {
		text-align: center;
	}
</style>