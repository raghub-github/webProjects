const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Display property</title>
      <style>
          * {
              box-sizing: border-box;
          }
  
          header {
              margin: auto;
              border: 2px solid rgb(188, 17, 188);
              width: 1000px;
          }
  
          img {
              display: block;
              width: 200px;
              margin: auto;
          }
  
          h3 {
              text-align: center;
              font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
          }
  
          .box {
              border: 2px solid black;
              background: gray;
              margin: 4px 0px;
              padding: 20px;
              display: inline-block;
              width: 33%;
              box-sizing: border-box;
          }
  
          .container {
              margin: auto;
              width: 1000px;
          }
      </style>
  </head>
  
  <body>
      <header class="top">
          <img src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png" alt="">
          <h3>Welcome to HUAWEI</h3>
      </header>
      <div class="container">
          <div class="box">
              <h4 class="heading">Heading 1</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti neque aspernatur dignissimos!
                  Expedita modi quis dolorum magni illo suscipit amet aliquam fugit excepturi nihil similique quod sunt
                  delectus, eligendi quasi ipsa repudiandae!</p>
          </div>
          <div class="box">
              <h4 class="heading">Heading 2</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti neque aspernatur dignissimos!
                  Expedita modi quis dolorum magni illo suscipit amet aliquam fugit excepturi nihil similique quod sunt
                  delectus, eligendi quasi ipsa repudiandae!</p>
          </div>
          <div class="box">
              <h4 class="heading">Heading 3</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti neque aspernatur dignissimos!
                  Expedita modi quis dolorum magni illo suscipit amet aliquam fugit excepturi nihil similique quod sunt
                  delectus, eligendi quasi ipsa repudiandae!</p>
          </div>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});