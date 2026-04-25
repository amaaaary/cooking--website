const toggleBtn = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-link');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    themeLink.setAttribute('href', savedTheme);
}

toggleBtn.addEventListener('click', () => {
    let currentTheme = themeLink.getAttribute('href');
    let newTheme = (currentTheme === 'light-theme.css') ? 'dark-theme.css' : 'light-theme.css';

    themeLink.setAttribute('href', newTheme);
    localStorage.setItem('theme', newTheme);
});
