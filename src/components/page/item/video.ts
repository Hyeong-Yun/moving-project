import { BaseComponent } from "./../../component.js";
export class VideoComponet extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
    <div class="video_player">
      <iframe src="" frameborder="0" class="video_iframe"></iframe>
      <h3 class="video_title"></h3>
    </div>
  </section>`);
    const iframe = this.element.querySelector(
      ".video_iframe"
    )! as HTMLIFrameElement;

    iframe.src = this.convertToEmbededURL(url); // url -> vidoeId
    console.log(url);

    const titleElement = this.element.querySelector(
      ".video_title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
  // input
  //https://www.youtube.com/watch?v=tRhPCHkolyg
  // https://www.youtube.com/embed/tRhPCHkolyg
  //output
  //정규표현식
  private convertToEmbededURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;

    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}

// <iframe
//   width="914"
//   height="514"
//   src="https://www.youtube.com/embed/gpVKjmjCnS4"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// ></iframe>;
