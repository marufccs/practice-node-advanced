const other = require('./other')

// const res = other.substract(6,4);

// console.log(res);

const http = require('http');
const url = require('url')

const server = http.createServer((req, res) => {
    const address_url = 'http://localhost:5000/contact?name=maruf&country=bangladesh';
    const parsed_url = url.parse(address_url, true);
    console.log(parsed_url);

    //to query 
    const queryObject = parsed_url.query 
    console.log(queryObject);
})

const PORT = 5000;
// server.listen(PORT);
console.log(`server is running at ${PORT}`);