const express = require('express');



const parser = require('body-parser');
const data = require('./routes/data')
const chat = express()


chat.use(parser.urlencoded())
chat.get('/login',(req,res,next)=>{
    res.send('<form action="/store" onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" method="POST"><input id="username" type="text" name="user"><button type="submit">submit</button></form>')

})
 chat.post('/store',(req,res,next)=>{
     console.log(req.body.user)
     res.redirect('/')
 })
 chat.get('/',(req,res,next)=>{
    res.write(`<body>${data}</body>`)
    res.write('<form onsubmit="document.getElementById(`username`).value=localStorage.getItem(`username`)" action="/" method="POST"><input type="text" name="message"><input id="username" type="hidden" name="user"><button type="submit">send</button><form/>')
    return res.end()
})
 chat.post('/',(req,res,next)=>{
    
    console.log(`{${req.body.user} : ${req.body.message}}`)
    data.push(`{${req.body.user} : ${req.body.message}}`)
    
    
    res.redirect('/')
 })


chat.listen(4000)