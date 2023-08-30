const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res)=>{
    res.send('<h1>Hello World</h1>')
});


app.set('view engine', 'ejs');


app.listen(port, (err)=>{
    if (err){
        console.log(`Error in express server:${err}`);
    }

    console.log(`Server is up and running on port:${port}`);
});