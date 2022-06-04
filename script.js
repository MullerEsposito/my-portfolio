const typingContainer = document.querySelector(".typing-container");
const typingLines = document.querySelectorAll(".typing-line p");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {    
    if (entry.isIntersecting) {   
      let delay = 0;
      for (const [key, line] of typingLines.entries()) {
        line.classList.add("typing-animation");
        line.style.animationDelay = `${delay}s`;
        if (key == typingLines.length - 1) 
          line.classList.add("typing-animation-final");
        delay += 2;
      };
      return;
    }
    
    for (const line of typingLines) {
      line.classList.remove("typing-animation");
      line.classList.remove("typing-animation-final");
    };
  });
});

observer.observe(typingLines[0]);