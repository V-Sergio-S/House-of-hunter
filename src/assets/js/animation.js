function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    scrollPositionRight = window.scrollY;
    scrollPositionLeft = window.scrollY;
  
    let style = document.createElement('style');
    style.innerHTML = `
    .title--front-page::after {
    content: '';
    width: ${Math.floor(scrollPositionRight / 20)}%;
    }
    .title--front-page::before {
    content: '';
    width: ${Math.floor(scrollPositionLeft / 20)}%; 
    margin-left: -${Math.floor(scrollPositionLeft / 20)}%;
    }
    `;
  
  document.head.appendChild(style);

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight,
        elementTop = reveals[i].getBoundingClientRect().top,
        elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active"); 
      
    } else {
      reveals[i].classList.remove("active");

    }
  }
}

window.addEventListener("scroll", reveal);
