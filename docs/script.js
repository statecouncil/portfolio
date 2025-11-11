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

// Lightbox behavior for image-with-caption images
document.querySelectorAll('.image-with-caption img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.innerHTML = '';
        const full = document.createElement('img');
        full.src = img.src;
        lightbox.appendChild(full);
        lightbox.style.display = 'flex';
    });

    // Add cursor pointer to indicate clickability
    img.style.cursor = 'pointer';
});

// Lightbox behavior for centered-image class
document.querySelectorAll('.centered-image').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.innerHTML = '';
        const full = document.createElement('img');
        full.src = img.src;
        lightbox.appendChild(full);
        lightbox.style.display = 'flex';
    });

    // Add cursor pointer to indicate clickability
    img.style.cursor = 'pointer';
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Spoiler toggle behavior
document.querySelectorAll('.spoiler-toggle').forEach(button => {
    // Set initial state - spoilers start collapsed (content hidden)
    button.classList.add('collapsed');
    
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isCurrentlyHidden = content.style.display === 'none' || content.style.display === '';
        
        // Toggle content visibility
        content.style.display = isCurrentlyHidden ? 'block' : 'none';
        
        // Toggle collapsed class for arrow animation
        button.classList.toggle('collapsed', !isCurrentlyHidden);
        
        // Find the text node (not span) and update it
        for (let node of button.childNodes) {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                node.textContent = isCurrentlyHidden ? 'Tell me less!' : 'Tell me more!';
                break;
            }
        }
    });
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