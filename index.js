require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta',(req,res)=>{
  res.send('aman_patel__ap');
})

app.get('/login',(req,res)=>{
    res.send('<h1>login successfully</h1>');
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})