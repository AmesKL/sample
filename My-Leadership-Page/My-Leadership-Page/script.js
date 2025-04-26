
document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Check for saved theme preference
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  body.classList.remove(isDarkMode ? 'light-mode' : 'dark-mode');
  body.classList.add(isDarkMode ? 'dark-mode' : 'light-mode');

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
  });
});
