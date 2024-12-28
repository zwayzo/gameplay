const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  let filePath = req.url === '/' ? 'views/home.html' : req.url;

  filePath = path.join(__dirname, 'public', filePath);
  // console.log(filePath);
  // Determine the file extension and MIME type
  const extname = path.extname(filePath);
  let contentType = 'text/html';
  if (extname === '.jpg' || extname === '.jpeg') contentType = 'image/jpeg';
  else if (extname === '.png') contentType = 'image/png';
  else if (extname === '.css') contentType = 'text/css';
  if (extname === '.json') contentType = 'application/json';
  else if (extname === '.js') contentType = 'application/javascript';

  // Read and serve the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404: File Not Found');
      } else {
        // Other server error
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`500: Server Error\n${err.message}`);
      }
    } else {
      // Serve the file with the correct content type
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});









// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer(function (req, res) {
//   let filePath = req.url === '/' ? 'views/home.html' : req.url; // Serve index.html by default
//   filePath = path.join(__dirname, filePath); // Build the full file path

//   // Determine the content type based on the file extension
//   console.log(`Serving file: ${filePath}`);
//   const extname = path.extname(filePath);
//   let contentType = 'text/html'; // Default content type
//   if (extname === '.css') contentType = 'text/css';
//   else if (extname === '.js') contentType = 'application/javascript';
//   else if (extname === '.png') contentType = 'image/png';
//   else if (extname === '.jpg') contentType = 'image/jpg'; 
//   else if (extname === '.jpeg') contentType = 'image/jpeg';

//   // Read and serve the file
//   fs.readFile(filePath, 'utf8', function (err, data) {
//     if (err) {
//       if (err.code === 'ENOENT') {
//         // If the file doesn't exist, serve a 404
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('404: File Not Found');
//       } else {
//         // Other errors
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end(`500: Server Error\n${err.message}`);
//       }
//     } else {
//       // Successfully read the file, send it with the correct content type
//       res.statusCode = 200;
//       res.setHeader('Content-Type', contentType);
//       res.end(data);
//     }
//   });
// });

// server.listen(port, hostname, function () {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });










// const http = require('http');

// const hostname = '127.0.0.1';

// const port = 3000;

// const fs = require('fs');

// const path = require('path');

// const url = require('url');




// const server = http.createServer((req, res) => {

// 	const parsedUrl = url.parse(req.url);

// 	let pathName = parsedUrl.pathName;

// 	if (pathName === '/')
// 		pathName = '/home.html';

// 	const extname = path.extname(pathName);

// 	let contentType = 'text/html';

// 	if (extname === '.css') contentType = 'text/css';
// 	else if (extname === '.js') contentType = 'application/javascript';
// 	else if (extname === '.jpg' || extname === '.jpeg') contentType = 'image/jpeg';
// 	else if (extname === '.png') contentType = 'image/png';
// 	else if (extname === '.gif') contentType = 'image/gif';

// 	const filePath = path.join(__dirname, pathName);
// 	fs.exists(filePath, function(exists){
// 		if (exists) {
// 			// Read and serve the file
// 			fs.readFile(filePath, function(err, data) {
// 			  if (err) {
// 				res.statusCode = 500;
// 				res.setHeader('Content-Type', 'text/plain');
// 				res.end('Error reading file');
// 			  } else {
// 				res.statusCode = 200;
// 				res.setHeader('Content-Type', contentType);
// 				res.end(data);
// 			  }
// 			});
// 		  } else {
// 			// File not found
// 			res.statusCode = 404;
// 			res.setHeader('Content-Type', 'text/plain');
// 			res.end('File not found');
// 		  }
// 	})
// })

// server.listen(port, hostname, function() {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });