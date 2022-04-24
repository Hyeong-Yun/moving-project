import { BaseComponent } from "./../../component.js";
export class ImageComponet extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
       <div class="image_holder">
         <img src="" alt="" class="image__thumnail">
      </div>
         <p class="image__title"></p>
     </section>`);

    const imageElement = this.element.querySelector(
      ".image__thumnail"
    )! as HTMLImageElement;

    imageElement.src = url;
    imageElement.alt = title;
    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;

    titleElement.textContent = title;
  }
}
