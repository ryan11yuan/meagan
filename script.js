<<<<<<< HEAD
const entries = document.querySelectorAll('.entry');

const observer = new IntersectionObserver((entriesList) => {
  entriesList.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

entries.forEach(e => observer.observe(e));


// Function to handle the "Begin" button click
document.getElementById('beginButton').addEventListener('click', () => {
  const scrollSpeed = 4; // lower = faster scroll

  const scroll = () => {
    if (window.scrollY + window.innerHeight < document.body.scrollHeight) {
      window.scrollBy(0, 1);
      setTimeout(scroll, scrollSpeed);
    }
  };

  scroll();
});

// Function to handle the password prompt
function checkPassword() {
      const password = document.getElementById("passwordInput").value;
      const correctPassword = "ripley"; // password

      if (password === correctPassword) {
        document.getElementById("passwordWall").style.display = "none";
        document.getElementById("content").style.display = "block";
      } else {
        document.getElementById("error").textContent = "oops! wrong password.";
      }
    }
=======
const entries = document.querySelectorAll('.entry');

const observer = new IntersectionObserver((entriesList) => {
  entriesList.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

entries.forEach(e => observer.observe(e));


// Function to handle the "Begin" button click
document.getElementById('beginButton').addEventListener('click', () => {
  const scrollSpeed = 4; // lower = faster scroll

  const scroll = () => {
    if (window.scrollY + window.innerHeight < document.body.scrollHeight) {
      window.scrollBy(0, 1);
      setTimeout(scroll, scrollSpeed);
    }
  };

  scroll();
});
>>>>>>> 7b24b66e46512fdcfc1f5da00f4dd41dfa91e6ba
