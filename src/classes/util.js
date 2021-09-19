class Util {
    static nextSlideShow(currentSlide, slideLength) {
        if(currentSlide + 1 >= slideLength) {
            return 0
        }
            return currentSlide + 1
    }

    static prevSlideShow(currentSlide, slideLength) {
        if(currentSlide - 1 < 0) {
            return slideLength - 1
        }
            return currentSlide - 1
    }
}