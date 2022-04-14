export class ImageComponet {
  private element: HTMLImageElement;
  constructor() {
    this.element = document.createElement("img");
    this.element.setAttribute("class", "image");
  }

  attatchTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
