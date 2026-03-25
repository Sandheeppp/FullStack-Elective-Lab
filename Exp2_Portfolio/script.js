// Add simple sticky navbar shadow effect on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 23, 42, 0.9)';
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
        nav.style.background = 'rgba(15, 23, 42, 0.75)';
        nav.style.boxShadow = 'none';
    }
});
