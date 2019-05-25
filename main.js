'use strict';
window.onload = () => {
  var builder = new Builder();
  let div = builder.get('div', 0);
  builder.create('ul').to(div);
  let ul = builder.get('ul', 0);
  builder.create('button').setText('добавить действие').to(div).on('click', (e)=>{
    let actionName = prompt('Введи действие', '');
    builder.create('li').to(ul).setText(actionName).on('click', (e)=>{
      if(confirm('Удалить?')){
        ul.removeChild(e.path[0]);
      }
    });
  })
}

function getData(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'test', true);
  xhr.send();
  xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;
  if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  } else {
    console.log(JSON.parse(xhr.responseText));
  }
}
}

function altGetData(){
  fetch('/test')
  .then((res)=> {
    res.json().then((data)=> {
      console.log(data);
    })
   })
}
