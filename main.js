document.addEventListener("DOMContentLoaded", function () {
    const words = ["Web Developer","Fresher","Student","Youtuber", "Frontend Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const newWordDelay = 2000;
  
    function type() {
        if (charIndex < words[wordIndex].length) {
            currentWord += words[wordIndex].charAt(charIndex);
            document.querySelector('.text').textContent = currentWord;
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newWordDelay);
        }
    }
  
    function erase() {
        if (charIndex > 0) {
            currentWord = currentWord.slice(0, -1);
            document.querySelector('.text').textContent = currentWord;
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed + 1100);
        }
    }
  
    type();
  });

var sidemenu = document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
