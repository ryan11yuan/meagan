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
