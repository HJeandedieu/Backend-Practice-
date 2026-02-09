// const http = require("http")
// const path = require("path")
// const fs = require("fs")

// const PORT = 3000
// const PUBLIC_DIR = path.join(__dirname, "public");


// const server = http.createServer((req,res)=>{
//     function serveFiles(filepath){
//         fs.readFile(filepath, (err,content)=>{
//             if(err){
//                 console.error("Couldn't load file", err.message);
//                 res.statusCode = 404;
//                 res.end();
//                 return
//             }
//             if(filepath.basename === "notFound"){
//                 res.statusCode = 404;
//             }else{
//                 res.statusCode = 200;
//             }
//             res.write(content)
//             res.end();
//         })
//     }

//     let filepath;

//     res.writeHead(200, {"Content-Type": "text/html"})

//     if(req.method === "GET"){
//         if(req.url === "/" || req.url === "/index"){
            
//             filepath = path.join(PUBLIC_DIR, "index.html");
//             serveFiles(filepath)
            
//         }else if(req.url === "/about"){

//             filepath = path.join(PUBLIC_DIR, "about.html")
//             serveFiles(filepath)

//         }else{

//             filepath = path.join(PUBLIC_DIR, "notFound.html")
//             serveFiles(filepath);
//         }
//     }
// })

// server.listen(PORT,()=>{
//     console.log(`Server is running on Port ${PORT}`)
// })

// const http = require("http")
// const fs = require("fs")
// const path = require("path")

// const PUBLIC_DIR = path.join(__dirname, "public")

// const PORT = 3000;

// const MIME_TYPES ={
//     ".html": "text/html",
//     ".css": "text/css",
//     ".js": "text/javascript",
//     ".png": "image/png",
//     ".jpg": "image/jpg",
//     ".jpeg": "image/jpeg",
//     ".svg": "image/svg+xml",
//     ".ico": "image/x-icon"
// };


// const server = http.createServer((req, res)=>{
//     // Allow only GET Requests
//     if (req.method !== "GET"){
//         res.writeHead(405, {"Content-Type": "text/plain"})
//         res.end("Method Not Allowed!")
//         return;
//     }

//     let filePath = 
//     req.url === "/"
//     ? path.join(PUBLIC_DIR, "index.html")
//     : path.join(PUBLIC_DIR, req.url);

//     const safePath = path.normalize(filePath)

//     if(!safePath.startsWith(PUBLIC_DIR)){
//         res.writeHead(403, {"Content-Type": "text/plain"})
//         res.end("Forbidden");
//         return;
//     }

//     const ext = path.extname(filePath)
//     const contentType = MIME_TYPES[ext] ||  "application/octet-stream";

//     fs.readFile(filePath, (err,content)=>{
//         if(err){
//             //Custom 404 page
//             fs.readFile(
//                 path.join(PUBLIC_DIR, 'notFound.html'),(err404, notFound)=>{
//                     res.writeHead(404, {'Content-Type': "text/html"});
//                     res.end(notFound || "404 Not Found")
//                 });
//                 return;
//         }

//         res.writeHead(200, {"Content-Type": contentType})
//         res.end(content);
//     });
// })

// server.listen(PORT, () =>{
//     console.log(`Server is running on Port ${PORT}`)
// })

const express = require("express")
const path = require("path")
const middleware = require('./middleware')

const app = express()
const PORT = 3000

//Register middleware
app.use(middleware)

//Serve static files in PUBLIC dir

app.use(express.static(path.join(__dirname, "public")))

//Routes

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/about", (req,res)=>{
    res.sendFile(path.join(__dirname, "public", "about.html"))
})

// 404 handler 
app.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname, "public", "notFound.html"))
})

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})

