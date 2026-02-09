function logHeaders(req, res, next){
    console.log("------Incoming Requests -----");
    console.log(`${req.method} ${req.url}`);
    console.log("Headers:");
    
    for (const [key, value] of Object.entries(req.headers)){
        console.log(`  ${key}: ${value}`)
    }
    console.log("----------------------------\n")
    next();
}

module.exports = logHeaders