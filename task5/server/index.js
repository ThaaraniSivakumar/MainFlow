const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')
const app = express()
    app.use(cors());
    app.use(express.json())
    mongoose.connect("mongodb+srv://sivathaarani2004:f7hWMNLP1WG3pnQF@taskmain.s6dti.mongodb.net/?retryWrites=true&w=majority&appName=taskmain")
    .then(() => {
        console.log("MongoDB connected");
      })
      .catch((err) => {
        console.error('Failed to  connect to MongoDB:', err.message);
      });
      app.get('/get',(req,res)=>{
        TodoModel.find()
        .then(result => res.json(result))
        .catch(err => res.json(err))
      })

      app.put('/update/:id',(req,res)=>{
 const{id} = req.params;
 console.log('Updating todo with ID:', id); 
 TodoModel.findByIdAndUpdate(id,{done: true} )
 .then(result => {
  if (!result) {
      console.log('Todo not found'); // Log if no document was found
      return res.status(404).json({ error: 'Todo not found' });
  }
  console.log('Updated todo:', result); // Log updated document
  res.json(result);
})
 .catch(err => res.json(err))
 
      })
app.delete('/delete/:id',(req,res)=>{
  const{id} = req.params;
  TodoModel.findByIdAndDelete({_id:id})
  .then(result=> res.json(result))
  .catch(err => res.json(err))
})
    app.post('/add',(req,res)=>{
        const task=req.body.task;
         TodoModel.create({
            task:task
         }).then(result => res.json(result))
         .catch(err => res.json(err))
    })

    app.listen(3001, ()=> {
        console.log('Server is  running on port 3001')
    }) 
