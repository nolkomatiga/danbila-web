/* ============================================
   DANBILA - danbila.my.id
   Minimal JavaScript
   Navbar + Mobile menu + Scroll reveal
   ~1.3KB
   ============================================ */

// --- Navbar scroll effect ---
var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });

// --- Mobile menu ---
var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('navLinks');

function toggleMenu() {
    var isActive = hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);
}

function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
}

// Close menu on outside click
document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
        closeMenu();
    }
});

// --- Scroll reveal (fade-up) ---
function initScrollReveal() {
    var targets = document.querySelectorAll(
        '.layanan-card, .porto-card, .area-tag, .hero-badge, .hero-trust, .kenapa-item'
    );

    for (var i = 0; i < targets.length; i++) {
        targets[i].classList.add('fade-up');
    }

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            for (var j = 0; j < entries.length; j++) {
                if (entries[j].isIntersecting) {
                    entries[j].target.classList.add('visible');
                    observer.unobserve(entries[j].target);
                }
            }
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -30px 0px'
        });

        for (var k = 0; k < targets.length; k++) {
            observer.observe(targets[k]);
        }
    } else {
        for (var l = 0; l < targets.length; l++) {
            targets[l].classList.add('visible');
        }
    }
}

document.addEventListener('DOMContentLoaded', initScrollReveal);