<template>
    <div class = "site-wrapper">
        <nav class = "navbar navbar-expand-lg">
        <div class = "container-fluid">
            <div class = "navbar-header">
                <a class = "navbar-brand" href="http://localhost:8080/#/">Anilog</a>
            </div>
            <ul class = "navbar-nav mr-auto">
                <li class = "nav-item"><a href="http://localhost:8080/#/uploadImage">Upload URL</a></li>
                <li class = "nav-item"><a href="#">Page</a></li>
                <li class = "nav-item"><a href="#">Page</a></li>
                <li class = "nav-item"><a href="#">Page</a></li>
            </ul>
        </div>
        </nav>
        <div class = "container">
            <div class = "row">
                <div class = "col-sm">
                    <div class = "image-uploader">
                        <h3>Upload Image</h3>
                        <input id = "url_field" class = "form-control" type="text" v-model="url" placeholder="Image URL"><br>
                        <button id="theButton" class = "btn btn-light" v-on:click="UploadImage">submit</button>
                    </div>
                </div>

                <div class = "col-sm">
                    <div class = "image">
                        <img v-bind:src="url" onload="$(this).hide().fadeIn(500);">
                    </div>
                </div>

                <div class = "col-sm">
                </div>
            </div>
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
</style>
