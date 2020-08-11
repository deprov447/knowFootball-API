var express = require("express"),
bodyParser  = require("body-parser")
facts       = require("./facts.json"),
quiz        = require("./quiz.json")
app         = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(4470,function(){
    console.log("API server online");
})

app.get("/",function(req,res){
    res.render("home.ejs")
})

app.get("/quiz",function(req,res){
    res.json(quiz_q(1));
})

app.get("/quiz/num=:quantity",function(req,res){
    res.json(quiz_q(req.params.quantity));
})

app.get("/facts",function(req,res){
    res.json(fact_q(1));
})

app.get("/facts/num=:quantity",function(req,res){
    res.json(fact_q(req.params.quantity));
})

app.get("*",function(req,res){
        res.send("<h1>Error404<h1><h3>Lost like Payet :/<h3>");
})

function fact_q(quantity){
    var factarray=[];
    for(var i=0;i<quantity;i++)
    {
        var randomvar=Math.random();
        randomvar*=facts.length;
        randomvar=Math.floor(randomvar)
        factarray.push(facts[randomvar]);
    }
    return factarray;
}

function quiz_q(quantity){
    var quizarray=[];
    for(var i=0;i<quantity;i++)
    {
        var randomvar=Math.random();
        randomvar*=quiz.length;
        randomvar=Math.floor(randomvar)
        quizarray.push(quiz[randomvar]);
    }
    return quizarray;
}
