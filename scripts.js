// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Lightbox for Gallery Images
document.querySelectorAll('.gallery-grid img').forEach(image => {
    image.addEventListener('click', function () {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
    });
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('lightbox').style.display = 'none';
});

window.addEventListener('click', function (e) {
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Form Validation
document.querySelector('.contact-form')?.addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        e.preventDefault();
        alert('Please fill out all fields.');
    } else if (!validateEmail(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Back to Top Button
window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});