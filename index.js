const express = require('express');
const app = express();
const port = 8000;

const db = require('./config/mongoose');
const Todolist = require('./models/todolist');

app.use('/static', express.static('common'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    // res.render('todo.ejs', {
    //     title:"My ToDO App"
    // });
    Todolist.find()
    .then((todolists)=>{
        return res.render('todo.ejs', {
            title:'My ToDO App',
            todo_lists:todolists
        })
    })
    .catch ((err)=>{
        console.log('error in fetching data from DB');
        return;
    })

});

app.post('/', (req, res)=>{
   // console.log(req.body);

   Todolist.create({
    content:req.body.content,
    date:req.body.date
   })
   .then((newtodolist)=>console.log('$$$$$$', newtodolist))
   .catch((err)=>console.log('error in creating the list'))
   return res.redirect('back');
});
app.set('view engine', 'ejs');


app.listen(port, (err)=>{
    if (err){
        console.log(`Error in express server:${err}`);
    }

    console.log(`Server is up and running on port:${port}`);
});