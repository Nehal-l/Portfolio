const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const closeBtn = document.querySelector(".close");

let currentIndex = 0;

// OPEN LIGHTBOX
galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    openLightbox();
  });
});

function openLightbox() {
  showMedia(currentIndex);
  lightbox.style.display = "flex";
}

function showMedia(index) {
  lightboxContent.innerHTML = "";

  const selectedItem = galleryItems[index];
  const img = selectedItem.querySelector("img");
  const video = selectedItem.querySelector("video");

  if (img) {
    const newImg = document.createElement("img");
    newImg.src = img.src;
    lightboxContent.appendChild(newImg);
  }

  if (video) {
    const newVideo = document.createElement("video");
    const source = video.querySelector("source");

    newVideo.src = source.src;
    newVideo.controls = true;
    newVideo.autoplay = true;

    lightboxContent.appendChild(newVideo);
  }
}

// CLOSE
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxContent.innerHTML = "";
});

// CLICK OUTSIDE CLOSE
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    lightboxContent.innerHTML = "";
  }
});

// KEYBOARD NAVIGATION
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "flex") {

    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      showMedia(currentIndex);
    }

    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      showMedia(currentIndex);
    }

    if (e.key === "Escape") {
      lightbox.style.display = "none";
      lightboxContent.innerHTML = "";
    }
  }
});
