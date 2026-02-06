// Smooth scroll for scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', function() {
    document.querySelector('.content-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    }
});

// Navbar scroll effect for index page
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-index');
    
    if (navbar) {
        // Change navbar background when scrolled down more than 50px
        if (window.scrollY > 500) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Chat button interaction
document.querySelector('.chat-button').addEventListener('click', function() {
    alert('Chat feature coming soon!');
});

// Dropdown functionality - improved
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdown) {
    const menu = dropdown.querySelector('.dropdown-menu');
    
    // Show dropdown on hover
    dropdown.addEventListener('mouseenter', function() {
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
        menu.style.transform = 'translateY(0)';
    });
    
    // Hide dropdown when mouse leaves
    dropdown.addEventListener('mouseleave', function() {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        menu.style.transform = 'translateY(-10px)';
    });
});

// Video playback optimization
const heroVideo = document.querySelector('.hero-video');

if (heroVideo) {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                heroVideo.play();
            } else {
                heroVideo.pause();
            }
        });
    });
    
    observer.observe(heroVideo);
}

// Smooth reveal animation for neighbourhood links
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const neighbourhoodObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
            setTimeout(function() {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50);
        }
    });
}, observerOptions);

document.querySelectorAll('.neighbourhood-link').forEach(function(link) {
    link.style.opacity = '0';
    link.style.transform = 'translateY(20px)';
    link.style.transition = 'all 0.5s ease';
    neighbourhoodObserver.observe(link);
});



