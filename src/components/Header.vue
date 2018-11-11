<template>
    <div>
        <div class="Navbar">
            <a href="http://localhost:8080/#/">Home</a>
            <a href="http://localhost:8080/#/uploadImage">Search</a> 
        </div><br><br><br>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../assets/style/uploadImage.css';
/* Add a black background color to the top navigation */
.Navbar {
    
    
    background-color: #333;
    overflow: hidden;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 98.5%; /* Full width */
}

/* Style the links inside the navigation bar */
.Navbar a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */
.Navbar a:hover {
    background-color: #ddd;
    color: black;
}

/* Add a color to the active/current link */
.Navbar a.active {
    background-color: red;
    color: white;
}

</style>

