// script.js

document.addEventListener('DOMContentLoaded', () => {
    const texts = ["I am a programmer", "I am a Seloso", "I am a UI/UX designer"];
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
