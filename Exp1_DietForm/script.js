document.getElementById('dietForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.querySelector('.submit-btn');
    const originalText = btn.innerText;
    
    // Loading animation
    btn.innerHTML = '⚙️ Processing...';
    btn.style.opacity = '0.8';

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.opacity = '1';
        
        // Show success alert
        const alertBox = document.getElementById('success-alert');
        alertBox.classList.remove('hidden');
        
        // Reset form
        this.reset();
        
        // Hide alert after 4s
        setTimeout(() => alertBox.classList.add('hidden'), 4000);
    }, 1200);
});
