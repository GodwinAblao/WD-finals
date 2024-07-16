// script.js

document.addEventListener('DOMContentLoaded', () => {
    const texts = ["I am a programmer", "I am a UI/UX designer"];
    const animatedText = document.querySelector('.animated-text');
    let index = 0;
    let letterIndex = 0;
    let currentText = '';
    let isAdding = true;

    const typeText = () => {
        if (isAdding) {
            currentText = texts[index].slice(0, letterIndex + 1);
            letterIndex++;
            if (letterIndex === texts[index].length) {
                isAdding = false;
            }
        } else {
            currentText = texts[index].slice(0, letterIndex - 1);
            letterIndex--;
            if (letterIndex === 0) {
                isAdding = true;
                index = (index + 1) % texts.length;
            }
        }

        animatedText.textContent = currentText;
        setTimeout(typeText, isAdding ? 150 : 50); // Adjust typing speed
    };

    typeText(); // Start the typing animation
});

document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading time (you can remove this in production)
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 2000); // 2 seconds delay, adjust as needed
});

// Animated text for the main page
document.addEventListener('DOMContentLoaded', function() {
    const text = "Web Developer | UI/UX Designer | Business Analytics Enthusiast";
    const animatedTextElement = document.querySelector('.animated-text');
    let index = 0;

    function typeText() {
        if (index < text.length) {
            animatedTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 50); // Adjust typing speed here
        }
    }

    // Start typing animation after preloader is done
    setTimeout(typeText, 2500); // 2.5 seconds after page load (2s preloader + 0.5s buffer)
});
