class Builder {
    private elem: any;
    private elems: NodeList;
    constructor(){}
    create(tagName: string): Builder{
        this.elem = document.createElement(tagName);
        return this;
    }
    to(parent: any): Builder{
        if(parent instanceof Object) parent.appendChild(this.elem);
        else document.querySelector(parent).appendChild(this.elem);
        return this;
    }
    setText(text: string): Builder{
        this.elem.textContent = text;
        return this;
    }
    get(tagName: string, index: number): HTMLElement{
        this.elems = document.querySelectorAll(tagName);
        this.elem = this.elems[index];
        return this.elem;
    }
    on(eventName: string, callback: Function): void {
        this.elem.addEventListener(eventName, callback);
    }
}
