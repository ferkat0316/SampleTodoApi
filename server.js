var express=require('express');
var app=express();
var PORT=process.env.PORT ||3000;
var todo =[{
    id: 1,
   description: 'Meet mom for lunch',
    completed: false

},
    {
        id: 2,
        description:'Go to shopping',
        completed: false
    },
    {
        id: 3,
        description: 'Pick up kid',
        completed: true
    }];

app.get('/', function (req, res) {
    res.send('Todo API root.')
})

// GET /todos
app.get('/todos', function (req, res) {

    res.json(todo);
})

//GET /todos/:id
app.get('/todos/:id', function (req, res) {
    var todoId=req.params.id;
    if(todo[todoId]===undefined){
        res.status(404).send('The item you looking for is not found.');
    }
    else{
        res.json(todo[todoId])
    }

   // res.json('Asking for todo item with id of: '+ req.params.id, res.json(todo[req.params.id]));
})


app.listen(PORT, function () {
    console.log('Express is listening on port: '+PORT);
})
