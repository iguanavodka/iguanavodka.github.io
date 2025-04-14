// Main JavaScript for Bryan Vigil's Professional Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', function(event) {
        if (nav && nav.classList.contains('active') && !event.target.closest('nav') && !event.target.closest('.nav-toggle')) {
            nav.classList.remove('active');
        }
    });
    
    // Expandable Experience Sections
    const experienceHeaders = document.querySelectorAll('.experience-header');
    
    experienceHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const toggle = this.querySelector('.experience-toggle');
            
            // Toggle active class
            content.classList.toggle('active');
            
            // Rotate toggle icon
            if (toggle) {
                if (content.classList.contains('active')) {
                    toggle.style.transform = 'rotate(180deg)';
                } else {
                    toggle.style.transform = 'rotate(0deg)';
                }
            }
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile nav if open
                    if (nav && nav.classList.contains('active')) {
                        nav.classList.remove('active');
                    }
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for header height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Animation on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                if (element.classList.contains('fade-in-element')) {
                    element.classList.add('fade-in');
                } else if (element.classList.contains('slide-up-element')) {
                    element.classList.add('slide-up');
                }
            }
        });
    }
    
    // Initial check and add scroll event listener
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    
    // Current year for copyright
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
