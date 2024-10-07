// Scroll-to-Top Button Script
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
    // Show the button when scrolling down
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Scroll to top when button is clicked with smooth behavior
scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


