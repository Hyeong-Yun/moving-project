import { BaseComponent, Component } from "./../component.js";

export interface Composable {
  addChild(child: Component): void;
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor() {
    super('<ul class="page"></ul>');
  }

  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
  }
}

export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements Composable
{
  constructor() {
    super(
      `<li class="page-item">
   <section class="page-item_body"></section>
   <div class="page-item_controls">
     <button class="close">&times;</button>
   </div>
 </li>
 `
    );
  }

  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item_body"
    )! as HTMLElement;
    child.attachTo(container);
  }
}