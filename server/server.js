const express = require('express')
const app = express();
const cors = require("cors");
const multer = require('multer');
const bodyParser = require('body-parser');

const fs = require('fs');
const readline = require('readline');

var Animals = ReadAnimals();

const corsOrigin = 'http://localhost:5000';
app.use(cors({ origin:[corsOrigin], methods:['GET','POST'], credentials: true })); 

const imageUploadPath = 'C:/Users/mratf/Desktop/Ovis/server/Test';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, imageUploadPath)
    }, filename: function(req, file, cb) {
      cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
    }
})

const imageUpload = multer({storage: storage})

app.post('/image-upload', imageUpload.array("my-image-file"), (req, res) => {
    console.log('POST request received to /image-upload.');
    console.log('Axios POST body: ', req.body);
    res.send('POST request recieved on server to /image-upload.');
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