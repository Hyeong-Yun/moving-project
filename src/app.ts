import { VideoComponet } from "./components/page/item/video.js";
import { TodoComponent } from "./components/page/item/takTo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ImageComponet } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponet(
      "Image title",
      "https://i.picsum.photos/id/967/200/300.jpg?hmac=N516I7nonEwIoem47eN9JDOoQOXjDLqpDz98BaZz3qc"
    );
    image.attachTo(appRoot, "beforeend");

    const note = new NoteComponent("note", "this is first note");
    note.attachTo(appRoot, "beforeend");

    const todo = new TodoComponent("things to do", "stufy for midterm exam");
    todo.attachTo(appRoot, "beforeend");

    const video = new VideoComponet(
      "Video Title",
      "https://youtu.be/K3-jG52XwuQ"
    );
    video.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
