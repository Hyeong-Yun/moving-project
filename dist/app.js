import { VideoComponet } from "./components/page/item/video.js";
import { TodoComponent } from "./components/page/item/takTo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ImageComponet } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponet("Image title", "https://i.picsum.photos/id/967/200/300.jpg?hmac=N516I7nonEwIoem47eN9JDOoQOXjDLqpDz98BaZz3qc");
        this.page.addChild(image);
        const note = new NoteComponent("note", "this is first note");
        this.page.addChild(note);
        const todo = new TodoComponent("things to do", "stufy for midterm exam");
        this.page.addChild(todo);
        const video = new VideoComponet("Video Title", "https://youtu.be/K3-jG52XwuQ");
        this.page.addChild(video);
    }
}
new App(document.querySelector(".document"));
