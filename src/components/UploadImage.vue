<template>
<div>
<div class="Navbar">
        <a href="http://localhost:8080/#/">Home</a>
        <a href="http://localhost:8080/#/uploadImage">Search</a> 
  </div>
    <div>
        <h3>Upload Image</h3>
        <input type="text" v-model="url" placeholder="Image URL"><br>
        <button v-on:click="UploadImage">submit</button>
    </div>
    </div>
</template>

<script>
export default {
  name: 'UploadImage',
  data: function(){
      
      return{
          url: ''
      }
  },
  methods:{
        UploadImage: function(){
            const Clarifai = require('clarifai');
            const clarifaiObject = new Clarifai.App({
            apiKey: '806a013982f0402eb76adaa64b7a9acb'
            });

            clarifaiObject.models.predict(Clarifai.GENERAL_MODEL, this.url)
            .then(response=>{
                var concepts = response['outputs'][0]['data']['concepts']
                console.log(concepts)
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
