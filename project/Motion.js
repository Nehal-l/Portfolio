const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const closeBtn = document.querySelector(".close");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const video = item.querySelector("video");

    lightboxContent.innerHTML = "";
    const newVideo = document.createElement("video");

    newVideo.src = video.querySelector("source").src;
    newVideo.controls = true;
    newVideo.autoplay = true;

    lightboxContent.appendChild(newVideo);
    lightbox.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxContent.innerHTML = "";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    lightboxContent.innerHTML = "";
  }
});