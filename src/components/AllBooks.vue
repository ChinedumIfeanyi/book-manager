
<template>
	<div class="all-books">
		<router-link :to='{name: "AddBook"}'>Add Book</router-link>

		<p>All Books</p>

			<table>
				<tr>
					<th>Title</th>
					<th>Summary</th>
					<!-- <th></th> -->
				</tr>
					<tr v-for="(book,index) in books" :key="index">
						<td>{{book.title}}</td>
						<td>{{book.summary.substring(0,150)}} <router-link :to="{name: 'ShowBook', params: {id: book.id}}">More</router-link></td>
					</tr>
			</table>
	</div>
</template>

<script>
	/* eslint-disable */
	export default {
		name: 'AllBooks',
		data: () => ({
			books: []
		}),
		created() {
			this.AllBooks()
		},
		methods:{
			AllBooks(){
				fetch('books.json')
				.then(response => response.json())
				.then(data => this.books = data )	
			}
		}
	}
</script>

<style scoped>
	p{
		text-align: center;
		font-size: 25px;
		font-family: cursive
	}
	table {
		margin: auto;
		border-collapse: collapse;
	}
	td {
		border: 3px solid #333;
		padding: 7px;
		height: 50px;
	}
	
</style>