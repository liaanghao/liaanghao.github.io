<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Wait for the research section to fully load (e.g., 3 seconds)
    setTimeout(function () {
      const textContainer = document.getElementById("research-text");
      if (textContainer) {
        // Remove the hidden class and set opacity to 1
        textContainer.classList.remove("hidden", "opacity-0");
        textContainer.classList.add("opacity-100");
      }
    }, 3000); // Adjust delay time in milliseconds
  });
</script>