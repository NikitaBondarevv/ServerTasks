const http = require('http');
const fs = require('fs');
const imageExtensionsReg = /\.(png|jpeg|gif)$/;
const extensionJsReg = /\.(js)$/;

const server = http.createServer((request, response) => {
  const fileName = request.url.replace('/', '');
  const errorHTML = '<strong>Error!</strong>';
  const errorText = `Error while reading ${fileName}`

  if (imageExtensionsReg.test(request.url) || extensionJsReg.test(request.url)) {
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
