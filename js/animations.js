window.addEventListener('load', () => {
    const scrollAnimation = document.getElementById("scroll-animation");

    //hide/show the mouse wheel scroll animation
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollAnimation.style.display = "none";
        } else {
            scrollAnimation.style.display = "flex";
        }
    });
});