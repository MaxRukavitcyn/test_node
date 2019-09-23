var Builder = /** @class */ (function () {
    function Builder() {
    }
    Builder.prototype.create = function (tagName) {
        this.elem = document.createElement(tagName);
        return this;
    };
    Builder.prototype.to = function (parent) {
        if (parent instanceof Object)
            parent.appendChild(this.elem);
        else
            document.querySelector(parent).appendChild(this.elem);
        return this;
    };
    Builder.prototype.setText = function (text) {
        this.elem.textContent = text;
        return this;
    };
    Builder.prototype.get = function (tagName, index) {
        this.elems = document.querySelectorAll(tagName);
        this.elem = this.elems[index];
        return this.elem;
    };
    Builder.prototype.on = function (eventName, callback) {
        this.elem.addEventListener(eventName, callback);
    };
    return Builder;
}());
