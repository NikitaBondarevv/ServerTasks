const http = require('http');
const fs = require('fs');
const imageExtebsionsReg = /\.(png|jpeg|gif)$/;
const extebsionJsReg = /\.(js)$/;

const server = http.createServer((request, response) => {
  const fileName = request.url.replace('/', '');
  const errorHTML = '<strong>Error!</strong>';
  const errorText = `Error while reading ${fileName}`

  if (imageExtebsionsReg.test(request.url)) {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        response.end(errorHTML);
        throw new Error(errorText);
      }

      response.end(data);
    })

    return;
  }

  if (extebsionJsReg.test(request.url)) {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        response.end(errorHTML);
        throw new Error(errorText);
      };
  
      response.end(data);
    });

    return;
  }

  fs.readFile('index.html', (err, data) => {
    if (err) {
      response.end(errorHTML);
      throw new Error('Error while reading index.html');
    };

    response.end(data);
  });
})

server.listen(3000);