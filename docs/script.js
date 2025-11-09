// Create lightbox element
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// Lightbox behavior
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.innerHTML = '';
        const full = document.createElement('img');
        full.src = img.src;
        lightbox.appendChild(full);
        lightbox.style.display = 'flex';
    });
});
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Spoiler toggle behavior
document.querySelectorAll('.spoiler-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const expanded = content.style.display === 'block';
        content.style.display = expanded ? 'none' : 'block';
        button.textContent = expanded ? 'More!' : 'Less!';
    });
});
