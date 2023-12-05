const http = require('http');
const fs = require('fs');
const port = 8000

const handleRequest = (req,res) => {
   let url = req.url;
   let fileName = "";
   switch(url){
    case '/':
        fileName = './index.html';
        break;
        case  '/home':
            fileName = './home.html'
        break;
        case  '/about':
            fileName = './about.html'
        break;
        case  '/product':
            fileName = './product.html'
        break;
        default:
            fileName = './404.html'
            break;
   }
   fs.readFile(fileName,(err,record)=>{
       
        res.end(record)
   })
}


const server = http.createServer(handleRequest);


server.listen(port,(err)=>{
    if(err){
        console.log("server not start");
        return false;
    }
    console.log(`server is start on port :- ${port}`);
})



