let index = `
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>TEST</title>
  </head>
  <body>
    <h1>Hellow world</h1>
    <button onclick="getData()" >push me</button>
    <script>
    function getData(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'test', false);
      xhr.send();
      if (xhr.status != 200) {
        alert( xhr.status + ': ' + xhr.statusText );
      } else {
        alert( xhr.responseText );
      }
    }
    </script>
  </body>
</html>
`;
let human = `{name: 'Max', lastName: 'Hand'}`;
let http = require('http');
const handler = (req, res)=>{
  if(req.url === '/'){
    res.end(index, 'text/html')
  }
  if(req.url === '/test'){
    res.end(human);
  }
};
const server = http.createServer(handler).listen(3000, ()=>console.log('мой сервак пашет'));
