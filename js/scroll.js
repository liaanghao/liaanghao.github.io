document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-animate");
  
    const onScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
        // Check if the element is visible within the viewport
        if (rect.top <= windowHeight * 0.9) {
          el.classList.add("visible");
        }
      });
    };
  
    // Run on scroll and on page load
    window.addEventListener("scroll", onScroll);
    onScroll(); // Trigger the effect when the page loads
  });
  