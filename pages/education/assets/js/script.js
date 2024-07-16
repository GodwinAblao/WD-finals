// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation for Cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-card');
            } else {
                // Remove the class if you want the animation to be re-triggered
                entry.target.classList.remove('animate-card');
            }
        });
    }, {
        threshold: 0.1  // Trigger the animation when 10% of the element is visible
    });

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // Hover Effect for Cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // Typing Effect for Headings
    const typeEffect = (element, text, speed = 100) => {
        let index = 0;
        const intervalId = setInterval(() => {
            element.textContent += text[index];
            index++;
            if (index >= text.length) {
                clearInterval(intervalId);
            }
        }, speed);
    };

    document.querySelectorAll('.content h1').forEach(h1 => {
        typeEffect(h1, h1.textContent);
        h1.textContent = ''; // Clear the existing text content
    });
});
