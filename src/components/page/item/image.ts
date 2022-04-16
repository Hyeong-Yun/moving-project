import { BaseComponent } from "./../../component.js";
export class ImageComponet extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
       <div class="image_holder">
         <img src="" alt="" class="image_thumnail"> </div>
         <p class="image_title"></p>
     </section>`);

    const imageElement = this.element.querySelector(
      ".image_thumnail"
    )! as HTMLImageElement;

    imageElement.src = url;
    imageElement.alt = title;
    const titleElement = this.element.querySelector(
      ".image_title"
    )! as HTMLParagraphElement;

    titleElement.textContent = title;
  }
}
