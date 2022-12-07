const readClient = require('./twitSearch')
const express = require('express');
const cors = require('cors')
//import { MongoClient } from "mongodb";

const Tweet = require('./models/tweets')

const app = express();
app.use(express.json());
app.use(cors())

//mongodb url
//url = 'mongodb://127.0.0.1:27017/'
// new mongo client
//const client = new MongoClient(url);
// create a new db
//const database = client.db("tweetSearch");

// async func to write to the db
/*async function write(str){
    try{
        const collec = database.collection(`${query}`)
        const inserted = await collec.insertOne(str)
        console.log(`A document was inserted with the _id: ${inserted.insertedId}`)
    }
    finally{
        client.close();
    }
}*/

app.get('/:query', async(req, res) => {
    const result = readClient.get('search/tweets', 
    { q: `${req.params.query}`, count: 100 },
    
    function gotdata(err, data, response){
        if(err){
            console.log(err)
        }
        else{
            const str = JSON.stringify(data.statuses)
            //write(str).catch(console.dir)
            //console.log(str)
            res.send(str)
    }
    })
})

//PORT ENVIRONMENT VARIABLE
const port = 3001
app.listen(port, () => console.log(`Listening on port ${port}..`));