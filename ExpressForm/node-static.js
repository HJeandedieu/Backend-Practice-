const http = require("http");
const nStatic = require("node-static");
const fileServer = new nStatic.Server("./public")

const port = 3000

http.createServer((req,res)=>{
    fileServer.serve(req,res);
},listen(port))