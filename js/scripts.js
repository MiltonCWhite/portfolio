// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function viewResume() {
    window.location.href = 'resume.pdf'; // Change to actual resume link
}

function viewSourceCode(url) {
    window.open(url, '_blank');
}
