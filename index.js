const express = require('express');
const nodemon = require('nodemon');
const app = express();
const port = 3000;

app.use(express.json());

let items=[];

//GET method--retrieve all items
app.get('/items', (req, res) => {
    res.json(items);
});

//POST method--add new item
app.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json({message:'item added successfully',newItem});
});

//UPDATE method--update item
app.put('/items/:id', (req, res) => {
    const index = parseInt(req.params.index);
    if(index >= 0 && index <items.length){
        items[index] = req.body;
        res.json({message:'item updated successfully',updatedItem:items[index]});
    }
    else{
        res.status(404).json({message:'item not found'});
    }
});

//start the server
app.listen(3000,()=>console.log("server is running in the port 3000"))    