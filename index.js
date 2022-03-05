const http = require("http");
const fs = require("fs");
let urlObj = require("url");
require("dotenv").config();

let routes = {
    "GET":{
        "/" :(req,res,params)=>{
            let file = fs.createReadStream("home.html","utf-8");
            res.writeHead(200,{"Content-Type":"text/html"});
            file.pipe(res);
        },
        "/about" :(req,res,params)=>{
            let file = fs.createReadStream("about.html","utf-8");
            res.writeHead(200,{"Content-Type":"text/html"});
            file.pipe(res);
        },
        "/profile" :(req,res,params)=>{
            let file = fs.createReadStream("profile.html","utf-8");
            res.writeHead(200,{"Content-Type":"text/html"});
            file.pipe(res);
        }
    },
    "POST":{
        "/" :(req,res,params)=>{
            let file = fs.createReadStream("home.html","utf-8");
            res.writeHead(200,{"Content-Type":"text/html"});
            file.pipe(res);
        },
        "/about" :(req,res,params)=>{
            let file = fs.createReadStream("about.html","utf-8");
            res.writeHead(200,{"Content-Type":"text/html"});
            file.pipe(res);
        },
        "/profile" :(req,res,params)=>{
            let file = fs.createReadStream("profile.html","utf-8");
            res.writeHead(200,{"Content-Type":"text/html"});
            file.pipe(res);
        }
    },
    "404":(req,res,params)=>{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("<h1 style='color:red;margin-top:15rem;text-align:center;'>404 Not Found Web Page!</h1>");
    }
}
// create server
let server = http.createServer((req,res)=>{
    let url = urlObj.parse(req.url,true);
    let params = urlObj.parse(req.url,true);
    let method =  req.method;
    let resolveRoute = routes[method][url.pathname];
    if(resolveRoute != undefined && resolveRoute != null){
        resolveRoute(req,res,params);
    }else{
        routes["404"](req,res,params);
    }
});

// run server
server.listen(4000,()=>{
    console.log("Server is running at port 4000!");
});