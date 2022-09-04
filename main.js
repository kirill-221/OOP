const DomElement = function (
    selector,
    height,
    width,
    backgroundColor,
    fontSize
) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = backgroundColor;
    this.fontSize = fontSize;
};

DomElement.prototype.setText = function (text) {
    this.text = text;
};

DomElement.prototype.createElement = function () {
    let item = '';

    if (this.selector.substring(0, 1) === '.') {
        item = document.createElement('div');
        item.classList.add(this.selector.substring(1));
        item.textContent = 'Это элемент класс';
    } else if (this.selector.substring(0, 1) === '#') {
        item = document.createElement('p');
        item.setAttribute('id', this.selector.substring(1));
        item.textContent = 'Это элемент параграф';
    }

    item.style.cssText = `height: ${this.height}px;
        width: ${this.width}px;
        background-color: #${this.bg};
        font-size: ${this.fontSize}px;
        font-family: serif;
        color: #232323;`;

    item.textContent = this.text;
    return item;
};

const elem1 = new DomElement('.block', 100, 150, 'fffacd', 16);
elem1.setText('Блок');
document.body.append(elem1.createElement());

const paragraphElem = new DomElement('#best', 100, 300, 'ffff00', 12);
paragraphElem.setText('Параграф');
document.body.append(paragraphElem.createElement());
