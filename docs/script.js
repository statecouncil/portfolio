// Create lightbox element
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// Lightbox behavior for gallery images
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.innerHTML = '';
        const full = document.createElement('img');
        full.src = img.src;
        lightbox.appendChild(full);
        lightbox.style.display = 'flex';
    });
});

// Lightbox behavior for figure images (detail pages)
// Add data-full="path/to/full.jpg" to show a different image on click than what is displayed
document.querySelectorAll('figure img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.innerHTML = '';
        const full = document.createElement('img');
        full.src = img.dataset.full || img.src;
        lightbox.appendChild(full);
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Category toggle behavior
document.querySelectorAll('.category-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const isCollapsed = content.classList.contains('collapsed');

        if (isCollapsed) {
            content.classList.remove('collapsed');
            toggle.classList.remove('collapsed');
        } else {
            content.classList.add('collapsed');
            toggle.classList.add('collapsed');
        }
    });
});