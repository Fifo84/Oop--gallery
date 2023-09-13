class Gallery {
  images = [];
  imgElem;
  currentImage = -1;
  interval;

  constructor(elemId, ...imageUrls) {
    this.images = imageUrls;

    const galleryElem = document.getElementById(elemId);
    galleryElem.classList.add("gallery");

    const right = document.createElement("div");
    right.classList.add("arrow", "right");
    right.addEventListener("click", () => this.prevImage());
    galleryElem.appendChild(right);

    const left = document.createElement("div");
    left.classList.add("arrow", "left");
    left.addEventListener("click", () => this.nextImage());
    galleryElem.appendChild(left);

    this.imgElem = document.createElement("img");

    galleryElem.addEventListener("mouseover", () => {
      this.stopAuto();
    });

    galleryElem.addEventListener("mouseout", () => {
      const myEvent = new CustomEvent("startAllGallery");
      dispatchEvent(myEvent);
    });

    addEventListener("startAllGallery", () => this.startAuto());

    galleryElem.appendChild(this.imgElem);

    this.nextImage();
    this.startAuto();
  }

  nextImage() {
    this.currentImage++;

    if (this.currentImage >= this.images.length) {
      this.currentImage = 0;
    }

    this.imgElem.src = this.images[this.currentImage];
  }

  prevImage() {
    this.currentImage--;

    if (this.currentImage < 0) {
      this.currentImage = this.images.length - 1;
    }

    this.imgElem.src = this.images[this.currentImage];
  }

  startAuto() {
    clearInterval(this.interval);

    this.interval = setInterval(() => {
      this.nextImage();
    }, 3 * 1000);
  }

  stopAuto() {
    clearInterval(this.interval);
  }
}

const g1 = new Gallery(
  "gallery1",
  "./images/תמונה (1).jpg",
  "./images/תמונה (2).jpg",
  "./images/תמונה (3).jpg",
  "./images/תמונה (4).jpg",
  "./images/תמונה (5).jpg"
);
const g2 = new Gallery(
  "gallery2",
  "./images/תמונה (6).jpg",
  "./images/תמונה (7).jpg",
  "./images/תמונה (8).jpg",
  "./images/תמונה (9).jpg",
  "./images/תמונה (10).jpg"
);
const g3 = new Gallery(
  "gallery3",
  "./images/תמונה (11).jpg",
  "./images/תמונה (12).jpg",
  "./images/תמונה (13).jpg",
  "./images/תמונה (14).jpg",
  "./images/תמונה (15).jpg",
  "./images/תמונה (16).jpg",
  "./images/תמונה (17).jpg"
);
