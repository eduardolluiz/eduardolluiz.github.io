document.addEventListener('DOMContentLoaded', function() {
    const myImage = document.querySelector("img");

    myImage.onclick = () => {
        const mySrc = myImage.getAttribute("src");
        if (mySrc === "firefox.png") {
            myImage.setAttribute("src", "firefox2.png");
        } else {
            myImage.setAttribute("src", "firefox.png");
        }
    };
});
