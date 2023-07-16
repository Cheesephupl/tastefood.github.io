window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Hiển thị hoặc ẩn nút bấm quay về top dựa trên vị trí cuộn của trang
  if (window.pageYOffset > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Xử lý sự kiện khi người dùng nhấp vào nút quay về top
document.getElementById("scrollToTopBtn").addEventListener("click", function () {
  // Cuộn lên đầu trang một cách mượt mà trong khoảng thời gian 500ms
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// backhome
// startslide
const slides = document.querySelectorAll('.slideshow-container img');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function changeSlide(n) {
  clearInterval(slideInterval);
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  showSlide(currentSlide);
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3000); // Change slide every 3 seconds
}

// Start the slideshow
changeSlide(0);

// endslide