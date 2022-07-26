export default class Section {
    constructor(selector) {
        this._container = document.querySelector(selector);
    }

    renderItems(items,renderer) {
        this._items =items;
        this._renderer = renderer;
        this._items.forEach(item => {
            this._renderer(item);
        });
    }

    addItem(element) {
        this._container.prepend(element);
    }
}