var http = require('http');
// var dt=require('./firstModule');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    // res.write("Current date and time : "+ dt.myDateTime());
    var q=url.parse(req.url,true).query;
    var txt=q.year+" "+q.month;
    res.end(txt);
}).listen(8080);