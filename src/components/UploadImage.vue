<template>
    <div>
        <h3>Upload Image</h3>
        <input id="url" type="text" v-model="url" placeholder="Image URL"><br>
        <button v-on:click="UploadImage">submit</button><br>
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
</style>
