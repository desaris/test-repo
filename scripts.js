document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        preloader.style.transition = 'opacity 0.5s ease';
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });
});