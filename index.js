let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");
let totalSlides = imgItem.length;
let startSlider = 0;


slideBtnLeft.addEventListener("click", () => {
    if (startSlider === 0) {
        startSlider = -(totalSlides - 1) * 100;
    } else {
        startSlider += 100;
    }

    imgItem.forEach((ele) => {
        ele.style.transform = `translateX(${startSlider}%)`;
    });
});

slideBtnRight.addEventListener("click", () => {
    if (startSlider === -(totalSlides - 1) * 100) {
        startSlider = 0;
    } else {
        startSlider -= 100;
    }

    imgItem.forEach((ele) => {
        ele.style.transform = `translateX(${startSlider}%)`;
    });
});

