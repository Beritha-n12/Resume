// Sticky Navbar
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
  });
  
  // Show scrool btn when scroll down
  window.addEventListener("scroll", function () {
    let scrool = document.querySelector("#scrool-up");
    scrool.classList.toggle("srcl", window.scrollY > 600);
  });

  const typedTextElement = document.getElementById('typed-text');
  const textToType = "I'm a Beginner Web Developer";
  let index = 0;

  function type() {
    if (index < textToType.length) {
      typedTextElement.textContent += textToType.charAt(index);
      index++;
      setTimeout(type, 100); // Adjust the typing speed (milliseconds)
    }
  }

  document.addEventListener('DOMContentLoaded', type);


  document.addEventListener('DOMContentLoaded', function () {
    var resumeLink = document.querySelector('.resume-link');
    var resumeButton = document.querySelector('.resume-button');

    // Add click event listener to the link
    resumeLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default behavior of the link

      // Add your download functionality here
      window.location.href = 'https://drive.google.com/file/d/1TLbnm0XG2AjaCrFtG0wBmbToh1twAcvY/view?usp=sharing';
    });

    // Add click event listener to the button
    resumeButton.addEventListener('click', function () {
      // Add your download functionality here
      window.location.href = 'https://drive.google.com/file/d/1TLbnm0XG2AjaCrFtG0wBmbToh1twAcvY/view?usp=sharing';
    });
  });
