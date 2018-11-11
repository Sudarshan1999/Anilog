<template>
    <div>
       <!-- <div class="Navbar">
            <a href="http://localhost:8080/#/">Home</a>
            <a href="http://localhost:8080/#/uploadImage">Search</a> 
        </div> -->
        <br><br><br>
        <div>
            <h3>Upload Image</h3>
            <input id="url" type="text" v-model="url" placeholder="Image URL"><br>
            <button v-on:click="UploadImage">submit</button><br>
            <img v-bind:src="url">
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
            const Clarifai = require("clarifai");
            const clarifaiObject = new Clarifai.App({
            apiKey: '806a013982f0402eb76adaa64b7a9acb'
            });
            var concepts,names=[],animal;
            var promise = new Promise((resolve, reject) => {    
                clarifaiObject.models.predict(Clarifai.GENERAL_MODEL, this.url)
                .then(response=>{
                    resolve(response['outputs'][0]['data']['concepts']);
                });
            });

            promise.then((concepts) =>{
                if(concepts!=null)
                {
                    for(var i=0;i<concepts.length;i++)
                    {
                        names.push(concepts[i]['name'])
                    }
                    const AnimalNames = require("../Data/AnimalNames.json")

                    for(var i=0;i<names.length;i++)
                    {
                        if(AnimalNames.indexOf(names[i]) != -1)
                        {
                            animal=names[i];
                            break;
                        }
                    }
                    console.log(animal);
                }
            })
        }
    }
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
</style>
