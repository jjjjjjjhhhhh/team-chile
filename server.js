const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");
const app=express();
var {createProxyMiddleware } = require("http-proxy-middleware");
var proxyPath = "http://127.0.0.1:3000";
var proxyOption ={target:proxyPath,changeOrigoin:true};

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.get("/",(reg,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get("/Search",(reg,res)=>{
    res.sendFile(path.join(__dirname,"Search.html"));
})
app.get("/Donation",(reg,res)=>{
    res.sendFile(path.join(__dirname,"Donation.html"));
})
app.get("/Detail",(reg,res)=>{
    res.sendFile(path.join(__dirname,"Detail.html"));
})
app.use("/api",createProxyMiddleware(proxyOption))

app.listen(8081,()=>{
    console.log("server is running on port 8081");
})