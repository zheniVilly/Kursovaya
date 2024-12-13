/* пока не рабочий*/
document.addEventListener('DOMContentLoaded', () => {
    const initSlider = ({
        sliderContainerSelector,
        sliderWrapperSelector,
        slidesSelector,
        gap,
        timeout
    }) => {
        const sliderContainer = document.querySelector(sliderContainerSelector);
        const sliderWrapper = document.querySelector(sliderWrapperSelector);
        const slides = document.querySelectorAll(slidesSelector);

        const sliderWidth = sliderContainer.clientWidth;
        const slideWidth = slides[0]?.clientWidth;
        const slidesCount = slides.length;
        const countSlidesOnVisible = Math.floor(sliderWidth / (slideWidth));

        const maxSlideIndex = Math.ceil(slidesCount / countSlidesOnVisible);
        let slideIndex = -1;

        if (slideWidth && slidesCount) {
            sliderWrapper.style.width = `${(slidesCount * (slideWidth + gap))}px`;
        }

        setInterval(() => {
            slide();
        }, timeout);

        slide();

        function slide() {
            if (slideIndex < maxSlideIndex - 1) {
                slideIndex++;
            } else {
                slideIndex = 0;
            }

            sliderWrapper.style.transform = `translateX(-${slideIndex * (slideWidth + gap)}px)`;
        }
    };

    initSlider({
        sliderContainerSelector: '.container--Testimonial',
        sliderWrapperSelector: '.cards',
        slidesSelector: '.test-card',
        gap: 55,
        timeout: 3000
    });
});
