const express = require('express');
const app = express();
const port = 8000;


app.use('/static', express.static('common'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.render('todo.ejs', {
        title:"My ToDO App"
    });
});

app.post('/', (req, res)=>{
    console.log(req.body);
});
app.set('view engine', 'ejs');


app.listen(port, (err)=>{
    if (err){
        console.log(`Error in express server:${err}`);
    }

    console.log(`Server is up and running on port:${port}`);
});