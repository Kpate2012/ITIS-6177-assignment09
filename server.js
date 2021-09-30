const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const host="localhost"; //only for local run

app.get('/says',async(req,res)=>{
    if(req.query){
        if(req.query.keyword){
            await axios.get('https://hqzzqf0sn4.execute-api.us-east-1.amazonaws.com/test/says?keyword='+req.query.keyword)
            .then(function(response){
                res.send(response.data);
            })
            .catch(function (err){
                res.send(err);
            })
        } else {
            res.send('Add keyword');
        }
    }
});

//host argument only for local run
app.listen(port,host,()=>{ 
    console.log('Server running at port: ',port);
});