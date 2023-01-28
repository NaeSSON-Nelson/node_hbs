import http from 'http';
const PORT=8081;
const server = http.createServer((_req,res)=>{
  
    res.writeHead(200,)
    res.write('Hello papu');

    res.end();
})

server.listen(PORT,()=>{
    console.log('listening port ',PORT);
})