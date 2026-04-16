// Smooth Scrolling Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    let valid = true;
    const email = form.querySelector('input[type="email"]');
    const name = form.querySelector('input[name="name"]');

    if (!email.value.includes('@')) {
        valid = false;
        alert('Please enter a valid email address.');
    }

    if (name.value.trim() === '') {
        valid = false;
        alert('Name cannot be empty.');
    }

    if (!valid) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

// Intersection Observer Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
});

document.querySelectorAll('.animate-on-scroll').forEach(section => {
    observer.observe(section);
});
