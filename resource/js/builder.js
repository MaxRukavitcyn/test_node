export class Builder {
  constructor(){}
  create(tagName){
    this.elem = document.createElement(tagName);
    return this;
  }
  to(parent){
    if(parent instanceof Object) parent.appendChild(this.elem);
    else document.querySelector(parent).appendChild(this.elem);
    return this;
  }
  setText(text){
    this.elem.textContent = text;
    return this;
  }
  get(tagName, id){
    if(isNaN(id) && !tagName) {
      this.elem = document.getElementById(id);
    } else {
      this.elems = document.querySelectorAll(tagName);
      this.elem = this.elems[id];
    }
    
    return this.elem;
  }
  on(eventName, callback){
    this.elem.addEventListener(eventName, callback);
  }
}
