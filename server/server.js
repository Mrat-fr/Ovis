const express = require('express')
const app = express();

const fs = require('fs');
const readline = require('readline');

var Animals = ReadAnimals();

app.get("/api", (req, res) =>{
    res.json({ "users": ["userOne", "usertwo", "userthree"]})
})

function ReadAnimals() {
    const lines = fs.readFileSync('Animals.txt', 'utf-8').split(/\r?\n/);
    return lines;
}




app.listen(5000, () => {console.log("server started on port 5000")})



//Google_API----------------------------------------------------------------------
const vision = require("@google-cloud/vision");

const client = new vision.ImageAnnotatorClient({
    keyFilename: "key.json"
});

async function HasAnimal(){

    var objectdetails = [];

    const request = {image: {content: fs.readFileSync(fileName)},};
    const [result] = await client.objectLocalization(request);
    const objects = result.localizedObjectAnnotations;

    objects.forEach(object => {
        objectdetails.push(object.name)
    })

    found = objectlable.some(r=> animals.indexOf(r) >= 0)
    
}

async function AnimalLables(filepath){
    client.labelDetection(filepath).then((results) => {
        const labels = results[0].labelAnnotations;

    }).catch((err) =>{
        console.error("ERROR:", err)
    })
}

function AnimalObject(){

}