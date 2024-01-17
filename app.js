// const express =require("express");
// const https=require("https");
// const app =express();

// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/index.html");
//     send.res("data send succsesfully");
//     })
    
//     // const url="https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=4152fe23365e260823a86f2442d94f7e";
//     // https.get(url,function(response){
//     //     console.log(response); 
//     //     response.on()

// app.listen(3000,function(){
//     console.log("server is running succsesfully !!!");
// })



const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https")

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    var FirstName= req.body.fname;
    var LastName=req.body.lname;
    var em=req.body.email;
    var data={
        members:[{
            email_address:em,status:"subscribed",merge_fields:{
                FNAME:FirstName,LNAME:LastName
            }
        }]
    };
    const jsonData=JSON.stringify(data);
    // const url="https://us21.api.mailchimp.com/3.0/lists/4b9a849843";
    const options={
        // method:"POST",auth:"prasad:76b83b9fbb2d3b8eb64236c23aac2065-us21"
        
    }
    const request=https.request(url,options,function(response){
        if(response.statusCode===200){
            res.sendFile(__dirname + "/succsess.html");
            
        }
        else{
            res.sendFile(__dirname + "/fail.html");

        }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
});
app.post("/fail",function(req,res){
    res.redirect("/");
})
app.listen(3000,function(){
    console.log("server is runnig succsesfully");
});




// 76b83b9fbb2d3b8eb64236c23aac2065-us21

















