window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});
