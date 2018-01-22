// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');


// request('https://sytantris.github.io/http-examples/', function(err, response, body) {
//   if (err) throw err;
//   console.log('Response Status Code:', response.statusCode);
//   console.log('Response Status Code:', response.body);
// });




request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log(response.headers['content-type']);
         console.log("Downloading IMG");
       })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on('end', function() {
          console.log("Image download complete.");
       });


// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?

