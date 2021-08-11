const express = require('express');
const app = express();
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended:false}))

app.post('/api/stage/:step',(req,res)=>{
    console.log('postman으로 해봐요')
    res.json(req.body)
})

app.post('/api/result/:id/:score',(req,res)=>{
    console.log('postman으로 해봐요')
    res.json(req.body)
})

app.post('/test_list',(req,res)=>{
    console.log('postman으로 해봐요')
    res.json(req.body)
})

app.post('/test_result',(req,res)=>{
    console.log('postman으로 해봐요')
    res.json(req.body)
})
app.get('/api',(req,res=>{
    res.send('aaaaaaa')
}))
app.listen(3000,()=>{
    console.log(`start server running ${3000}`)
})
