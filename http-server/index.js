const http =require("http")

const server=http.createServer((req,res)=>{
    console.log("Hello World from server")
    res.end("Its my server response")
})

server.listen(8000,()=>{
    console.log(`server running at 8000`);
    
})