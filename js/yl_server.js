const http=require("http");
const fs=require("fs");
const express=require("express");
const mysql=require("mysql");
const qs=require("queryString");
var app=express();
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    database:"yl",
    password:"",
    port:3306,
    connectionLimit:5
});
http.createServer(app).listen(8090);
app.get();

//×¢²á£º
app.post("/register",(req,res)=>{
    var u=req.query.uname;
    var p=req.query.upwd;
    pool.getConnction((err,conn)=>{
        conn.query("INSERT INTO yl_user VALUES(null,?,?",[u,p],(err,rsult)=>{
            res.json.(result);
        })
    })
})

//µÇÂ¼£º
app.get("/html/login.html",(res,req)=>{
    var u=req.query.uname;
    var p=req.query.upwd;
    pool.getConnection(err,conn)=>{
        conn.query("SELECT FROM yl_user WHERE uname=? AND upwd=?",[u,p],(err,result)=>{
            res.json(result);
        })
    }
});