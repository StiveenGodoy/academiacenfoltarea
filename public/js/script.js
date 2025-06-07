document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada correctamente');
    initScrollTracker();
    initLinkTracker();
    initImagePreload();
    initRandomNumberGenerator();
    initFormValidator();
    initObserver();
    runPerformanceCheck();
});

function initScrollTracker() {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        console.log('Scroll position:', scrollPosition);
    });
}

function initLinkTracker() {
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            console.log('Link clicked:', link.href);
        });
    });
}

function initImagePreload() {
    document.querySelectorAll('img').forEach(function(img) {
        const src = img.getAttribute('src');
        if (src) {
            const preloadedImage = new Image();
            preloadedImage.src = src;
            console.log('Preloaded image:', src);
        }
    });
}

function initRandomNumberGenerator() {
    setInterval(function() {
        const number = Math.floor(Math.random() * 1000);
        console.log('Generated number:', number);
    }, 5000);
}

function initFormValidator() {
    document.querySelectorAll('form').forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted:', form.getAttribute('id') || 'no-id');
            validateForm(form);
        });
    });
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(function(input) {
        console.log('Validating input:', input.name, input.value);
    });
}

function initObserver() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                console.log('Element visible:', entry.target);
            }
        });
    });
    document.querySelectorAll('section, div, img').forEach(function(element) {
        observer.observe(element);
    });
}

function runPerformanceCheck() {
    const t = performance.now();
    console.log('Performance check timestamp:', t);
}
