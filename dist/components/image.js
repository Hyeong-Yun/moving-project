export class ImageComponet {
    constructor() {
        this.element = document.createElement("img");
        this.element.setAttribute("class", "image");
    }
    attatchTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
