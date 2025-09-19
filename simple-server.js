const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
    res.writeHead(200 , {'content-type' : 'text/plain'});
    res.end("Hello World");
} else if (req.url == '/about') {
    res.writeHead(200 , {'content-type' : 'text/plain'});
    res.end("About Us");
} 
else if (req.url == '/file') {
    const readStream = fs.createReadStream("./sample.mp4");
    res.writeHead(200 , {'content-type' : 'video/mp4'});
    readStream.pipe(res);
} 
else {
    res.writeHead(404 , {'content-type' : 'text/plain'});
    res.end("Not Found");
}
});

server.listen(3000, () => {
    console.log("Server is listening http://localhost:3000");
});