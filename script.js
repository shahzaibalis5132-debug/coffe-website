// Initialize AOS only when the CDN script has loaded successfully.
if (window.AOS) {
    window.AOS.init({
        duration: 1000,
        once: true,
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (!target) {
            return;
        }

        e.preventDefault();
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Menu tabs functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tab = this.getAttribute('data-tab');
        
        // Remove active class from all buttons
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // Hide all categories
        document.querySelectorAll('.menu-category').forEach(cat => cat.classList.remove('active'));
        // Show selected category
        document.getElementById(tab).classList.add('active');
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const destinationEmail = this.dataset.newsletterEmail || 'info@malikteastall.pk';

        if (!emailInput || !emailInput.value.trim()) {
            return;
        }

        const subject = encodeURIComponent('Newsletter Subscription Request');
        const body = encodeURIComponent(
            `Please subscribe this email to the Malik Tea Stall newsletter:%0D%0A%0D%0A${emailInput.value.trim()}`
        );

        window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
        this.reset();
    });
}
