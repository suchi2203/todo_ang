const express= require("express");
const bodyParser=require("body-parser");
// const date= require(__dirname + '/date.js');
const app= express();
app.set('view engine',"ejs");
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static(__dirname+"/public"));

var items=["Be Happy"];
var workList=["good"];

app.get("/",function(req,res){

    //let dd = date.t_date();
    var today = new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let todayDate_ = today.toLocaleDateString("en-US",options);
    //return todayDate_;
    res.render("list",{listTitle: todayDate_, itemslist:items});

    //res.render("list",{dayofWeek: day});
});


app.post("/",function(req,res){          
    let item=req.body.newItem;

    if(req.body.button == "work"){
    workList.push(item);
    res.redirect('/work');
    }
    else{
    items.push(item);
    res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"work",itemslist:workList});
});

app.get("/about",function(req,res){
    res.render("about");
});

app.listen(process.env.PORT||3000,function(){
    console.log("server running on port 3000");
});