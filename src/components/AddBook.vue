<template>
	<section>
		<nav>
			<router-link :to='{name: "AllBooks"}'>All Books </router-link>
		</nav>

		<p> Add A Book Summary </p>
		<div class="form-add">
			<form>
				<div class="f-input">
					<label for="">Title</label>
					<div>
						<input type="text" name="title" placeholder="Title">
					</div>
				</div>
				<div class="f-input">
					<label for="">Summary</label>
					<div>
						<textarea name="summary" id="summary" cols="30" rows="10" placeholder="In Your Own Words, Give A Detailed Summary Of The Book"></textarea>
					</div>
				</div>
				<div>
					<input class="add" type="submit" value="ADD" @click="addBook">
				</div>
			</form>	
		</div>
		
	</section>
	
</template>

<script>
	export default {
		name: 'AddBook',
		data: ()=>({
			title: "",
			summary: ""
		}),
		methods:{
			addBook() {
				fetch('books.json')
				.then(response => response.json())
				.then(data =>{
					data.push({
						id: data.length + 1,
						title: this.title,
						summary: this.summary
					})
				})
				//navigate to view all books
				this.$router.push({
					name: 'AllBooks'
				})
			}
		}
	}
</script>

<style scoped>
	p {
		text-align: center;
		font-size: 25px;
		font-family: sans-serif;
	}
	form {
		margin: auto;
		text-align: center;
		width: 70%;
	}
	.f-input {
		margin-bottom: 20px;	
	}
	label {
		font-size: 20px;
	}
	input[type='text']{
		font-size: 20px;
		padding: 5px;
		width: 300px;
		height: 30px;
		border-radius: 10px
	}
	textarea {
		font-size: 20px;
		padding: 5px;
		width: 400px;
		border-radius: 10px;
	}
	.add {
		background-color: #093;
		color: #fff;
		font-size: 25px;
		border: none;
		border-radius: 5px;
		height: 40px;
		width: 100px;
		cursor: pointer;
	}

</style>