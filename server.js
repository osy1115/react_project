const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const {sequelize, test_page_text, test_result} = require('./models');

app.use(bodyParser.urlencoded({extended:false,}))

sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결됨.');
    }).catch((err) => {
        console.error(err);
    });



app.use(cors())



app.post('/test/:id', async (req,res)=>{
    console.log(req.params.id)
    let TPT = await test_page_text.findOne({
        where : {page_id : req.params.id}
    })
    res.json({TPT})
}) 

app.post('/result/:id', async (req,res)=>{
    console.log(req.params.id)
    const str = req.params.id;
    const arr = str.split("-");
    console.log(arr);

    let step = arr[1]
    let result_num;
    if(step<=20){
        result_num=5;
    }else if(step<=40){
        result_num=4;
    }else if(step<=60){
        result_num=3;
    }else if(step<=80){
        result_num=2;
    }else{
        result_num=1;
    }

    let result =  await test_result.findOne({
        where : {
            list_id : arr[0],
            result_step : result_num
        }
    })
    
    res.json({result})
})


app.listen(3000,(req,res)=>{
    console.log(`server start port : ${3000}`)
})
