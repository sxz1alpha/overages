const fs = require("fs")
const pdf = require('pdf-extraction');

let dataBuffer = fs.readFileSync(window.location('#upzone'));

pdf(dataBuffer).then(function (data) {
    console.log(data.numpages);
    // console.log(data.info);
    // console.log(data.metadata);
    // console.log(data.text);
});