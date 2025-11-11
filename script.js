// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// Animated Section Reveals on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            
            // Trigger skill bar animations if this is the skills section
            if (entry.target.classList.contains('skills-section')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal-hidden');
    observer.observe(section);
});

// Also observe elements with specific classes
document.querySelectorAll('.card, .project-item, .skill-item').forEach(element => {
    element.classList.add('reveal-hidden');
    observer.observe(element);
});

// Skill Progress Bars Animation
let skillsAnimated = false;

function animateSkillBars() {
    if (skillsAnimated) return;
    skillsAnimated = true;

    const skillBars = document.querySelectorAll('.skill-progress, .progress-bar');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const progress = bar.getAttribute('data-progress') || bar.style.width || '0%';
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = progress;
            }, 100);
        }, index * 100);
    });
}

// Dynamic Copyright Year
const copyrightYear = document.querySelector('.copyright-year, #copyright-year, .year');
if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}

// Alternative: Update any element containing copyright text
document.querySelectorAll('footer p, .footer-text').forEach(element => {
    const text = element.textContent;
    if (text.includes('©') || text.toLowerCase().includes('copyright')) {
        element.textContent = text.replace(/\d{4}/, new Date().getFullYear());
    }
});

// Mobile Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger, .menu-toggle, .mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu, .nav-links, .mobile-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

// Contact Form Validation
const contactForm = document.querySelector('.contact-form, #contact-form, form[name="contact"]');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const errors = [];

        // Get form fields
        const name = contactForm.querySelector('input[name="name"], #name');
        const email = contactForm.querySelector('input[name="email"], #email');
        const message = contactForm.querySelector('textarea[name="message"], #message');
        const phone = contactForm.querySelector('input[name="phone"], #phone');

        // Clear previous errors
        contactForm.querySelectorAll('.error-message').forEach(error => error.remove());
        contactForm.querySelectorAll('.error').forEach(field => field.classList.remove('error'));

        // Validate name
        if (name && name.value.trim().length < 2) {
            isValid = false;
            errors.push({ field: name, message: 'Name must be at least 2 characters long' });
        }

        // Validate email
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                isValid = false;
                errors.push({ field: email, message: 'Please enter a valid email address' });
            }
        }

        // Validate phone (if present)
        if (phone && phone.value.trim()) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(phone.value.trim()) || phone.value.trim().length < 10) {
                isValid = false;
                errors.push({ field: phone, message: 'Please enter a valid phone number' });
            }
        }

        // Validate message
        if (message && message.value.trim().length < 10) {
            isValid = false;
            errors.push({ field: message, message: 'Message must be at least 10 characters long' });
        }

        // Display errors
        if (!isValid) {
            errors.forEach(({ field, message }) => {
                field.classList.add('error');
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.textContent = message;
                errorDiv.style.color = 'red';
                errorDiv.style.fontSize = '0.875rem';
                errorDiv.style.marginTop = '0.25rem';
                field.parentNode.appendChild(errorDiv);
            });
            return;
        }

        // If valid, show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you! Your message has been sent successfully.';
        successMessage.style.color = 'green';
        successMessage.style.padding = '1rem';
        successMessage.style.marginTop = '1rem';
        successMessage.style.borderRadius = '0.5rem';
        successMessage.style.backgroundColor = 'rgba(0, 255, 0, 0.1)';
        successMessage.style.textAlign = 'center';
        
        contactForm.insertAdjacentElement('afterend', successMessage);
        contactForm.reset();

        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });

    // Real-time validation feedback
    contactForm.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('blur', () => {
            const errorMessage = field.parentNode.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
            field.classList.remove('error');
        });
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('nav, .navbar, header');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll (optional)
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
}

// Add CSS for animations (injected via JavaScript)
const style = document.createElement('style');
style.textContent = `
    .reveal-hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .reveal {
        opacity: 1;
        transform: translateY(0);
    }

    .skill-progress, .progress-bar {
        transition: width 1s ease-out;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }

    nav, .navbar, header {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    nav.scrolled, .navbar.scrolled, header.scrolled {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    body.menu-open {
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Initialize on load
window.addEventListener('load', () => {
    // Check if skills section is already in view
    const skillsSection = document.querySelector('.skills-section, #skills');
    if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            animateSkillBars();
        }
    }
});

console.log('Interactive features loaded successfully!');
