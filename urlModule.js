var url = require('url');
var adr = 'https://localhost:8080/default.htm?year=2023&month=august';
var q= url.parse(adr,true);

console.log(q.hostname);
console.log(q.pathname);
console.log(q.search);
console.log(q.query);
var qdata=q.query;
console.log(qdata.year);
console.log(qdata.month);