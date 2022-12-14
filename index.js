const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.json({
        "name": "Ishan Chamith",
        "age": 15
    });
})

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server runing on port: ${port}`);
});