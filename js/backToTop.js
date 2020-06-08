window.addEventListener('load', () => {
    const button = document.getElementById("back-to-top");

    button.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });
});