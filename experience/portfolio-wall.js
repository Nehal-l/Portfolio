const galleryImages = document.querySelectorAll(".gallery-item img"); 
const lightbox = document.getElementById("lightbox"); 
const lightboxImg = document.getElementById("lightbox-img"); 
const closeBtn = document.querySelector(".close"); 
let currentIndex = 0; 

// Open Lightbox 
galleryImages.forEach((img, index) => { 
  img.addEventListener("click", () => {
     lightbox.style.display = "flex"; 
     lightboxImg.src = img.src; 
     currentIndex = index; }); 
    }); 

// Close Lightbox 
closeBtn.addEventListener("click", () => {
   lightbox.style.display = "none"; }); 

// Close when clicking outside image 
   lightbox.addEventListener("click", (e) => { 
    if (e.target !== lightboxImg) { 
      lightbox.style.display = "none";
     } 
    }); 
// Keyboard Navigation 
document.addEventListener("keydown", (e) => {
   if (lightbox.style.display === "flex") {

// RIGHT ARROW → Next 
if (e.key === "ArrowRight") {
  currentIndex = (currentIndex + 1) % galleryImages.length; 
  lightboxImg.src = galleryImages[currentIndex].src; 
} 

// LEFT ARROW ← Previous 
if (e.key === "ArrowLeft") {
   currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src; 
  } 
  
// ESC → Close 
if (e.key === "Escape") {
   lightbox.style.display = "none"; 
  } 
} 
});