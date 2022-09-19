const http = require('http');
const fs = require('fs');
const extensionsReg = /\.(png|jpeg|gif|js)$/;

const server = http.createServer((request, response) => {
  const fileName = request.url.replace('/', '');
  const errorHTML = '<strong>Error!</strong>';
  const errorText = `Error while reading ${fileName}`;

  if (extensionsReg.test(request.url)) {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        response.end(errorHTML);
        throw new Error(errorText);
      }
  
      response.end(data);
    })
  
    return;
  }

  fs.readFile('index.html', (err, data) => {
    if (err) {
      response.end(errorHTML);
      throw new Error('Error while reading index.html');
    };

    response.end(data.toString('utf8').replace('</body>', `<time>${new Date().toLocaleDateString()}</time> </body>`));
  });
})

server.listen(3000);
