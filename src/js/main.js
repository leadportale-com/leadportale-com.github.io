import '../css/main.css';

function initScrollToTopButton() {
    let top_area = document.getElementById("page-top-area");
    let button = document.getElementById("scroll-to-top");
    button.addEventListener("click", function() {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    });    
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                button.classList.add("hidden");
            } else {
                button.classList.remove("hidden");
            }
          });    
    }, {threshold: 0.1});
    observer.observe(top_area);    
}

document.addEventListener("DOMContentLoaded", function() {
    initScrollToTopButton();
});