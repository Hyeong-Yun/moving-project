import { BaseComponent } from "./../component.js";
export class PageComponent extends BaseComponent {
    constructor(pageItemConstructor) {
        super('<ul class="page"></ul>');
        this.pageItemConstructor = pageItemConstructor;
    }
    addChild(section) {
        const item = new this.pageItemConstructor();
        item.addChild(section);
        item.attachTo(this.element, "beforeend");
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }
}
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page-item">
   <section class="page-item_body"></section>
   <div class="page-item_controls">
     <button class="close">&times;</button>
   </div>
   </li>
 `);
        const closeBtn = this.element.querySelector(".close");
        closeBtn.onclick = () => {
            this.closeListenner && this.closeListenner();
        };
    }
    addChild(child) {
        const container = this.element.querySelector(".page-item_body");
        child.attachTo(container);
    }
    setOnCloseListener(listener) {
        this.closeListenner = listener;
    }
}
