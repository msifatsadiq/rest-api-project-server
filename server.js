import express from 'express';


const app = express();
const PORT =  3000; 

app.get('/api/notes',(req,res)=>{
    res.send('Hello from the Notes API');
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});