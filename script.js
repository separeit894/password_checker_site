const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-theme');

    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    console.log("function : toggleTheme : save theme: ", theme)
    document.cookie = "theme=" + encodeURIComponent(theme) + "; path=/; max-age=" + 60 * 60 * 24 * 30;
};

const getTheme = () => {
    const cookies = document.cookie.split('; ');
    console.log("function : getTheme : All cookies : ", cookies)
    for(const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'theme') {
            return decodeURIComponent(value);
        }
    }
    return 'light';
};

const applyTheme = () => {
    const theme = getTheme();
    console.log("function : applyTheme : theme : ", theme);
    const body = document.body;
    if (theme === "dark") {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
    
};

document.getElementById('theme-toggle-button').addEventListener('click', toggleTheme);

applyTheme();