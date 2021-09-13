require('dotenv');

const http = require('http');
const fs = require('fs');
const sass = require('sass');

const PORT = process.env.PORT | 8080;
const PUBLIC_PATH = __dirname + '/public/';

const handleResponse = (err, html) => {
  let content = html,
    contentType = 'html',
    code = 200;

  if (err) {
    content = err;
    contentType = 'plain';
    code = 404;
  }

  return { content, contentType, code };
};

fs.readFile(PUBLIC_PATH + 'index.html', (err, html) => {
  const { content, contentType, code } = handleResponse(err, html);

  http
    .createServer((req, res) => {
      res.writeHead(code, { 'Content-Type': 'text/' + contentType });
      res.write(content);
      res.end();
    })
    .listen(PORT, () => {
      console.log(`Running into http://localhost:${PORT}`);
    });
});
