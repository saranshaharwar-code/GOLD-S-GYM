// Initialize Lucide icons
lucide.createIcons();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;

        if (elTop < triggerBottom) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Initial check
revealOnScroll();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Video optimization: Ensure it plays correctly on all devices
const video = document.querySelector('.hero-video');
if (video) {
    video.addEventListener('loadeddata', () => {
        console.log('Video loaded');
    });
    
    // Fallback if video fails to load or is not supported
    video.onerror = () => {
        console.error('Video error');
        video.style.display = 'none';
        document.querySelector('.hero').style.background = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('images/hero_fallback.png') center/cover no-repeat";
    };
}
