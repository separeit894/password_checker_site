const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-theme');
};


document.getElementById('theme-toggle-button').addEventListener('click', toggleTheme);