<template>
  <div>
    <header> 
      <h3 class=""> summary of all books you read kept in one place</h3>      
    </header>
    <nav>
      <ul>
        <li></li> 
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'Header',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    background-color: grey;
    display: flex;
    height: 150px;
    margin-bottom: 30px
  }
  h3 {
    margin: auto;
    text-transform: capitalize;
    font-size: 23px;
    font-family: cursive;
    color: #fff;
  }
  nav {

  }
  li {
    list-style: none
  }
</style>
