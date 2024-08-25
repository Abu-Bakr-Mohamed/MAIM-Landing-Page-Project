function handleScroll() {
   const button = document.getElementById("scrollToTopBtn");
   if (window.scrollY > 300) {
      // Change 300 to the scroll position where you want the button to appear
      button.style.display = "block";
   } else {
      button.style.display = "none";
   }
}

window.addEventListener("scroll", handleScroll);

handleScroll();

document
   .getElementById("scrollToTopBtn")
   .addEventListener("click", function () {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   });
