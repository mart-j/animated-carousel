//visi slaidi js-slide-item
//bultinas js-arrow-left js-arrow-right
//punktini ja-slider-dot

const slides = document.querySelectorAll('.js-slide-item')
const dots = document.querySelectorAll('.js-slider-dot')
const left = document.querySelector('.js-arrow-left')
const right = document.querySelector('.js-arrow-right')

let activeSlide = 0



right.addEventListener('click', () => {

    let prevActive = activeSlide
    slides[activeSlide].classList.add('animate__animated', 'animate__fadeOutLeftBig')
    setTimeout(() => {
        slides[prevActive].classList.remove('active', 'animate__animated', 'animate__fadeOutLeftBig')
    }, 400)

    dots[activeSlide].classList.remove('active')
    activeSlide = activeSlide + 1
    if (activeSlide >= slides.length) {
        activeSlide = 0
    }
    slides[activeSlide].classList.add('active', 'animate__animated', 'animate__fadeInRightBig')
    dots[activeSlide].classList.add('active')
    setTimeout(() => {
        slides[activeSlide].classList.remove('animate__animated', 'animate__fadeInRightBig')
    }, 400)



})

left.addEventListener('click', () => {
    let prevActive = activeSlide
    slides[activeSlide].classList.add('animate__animated', 'animate__fadeOutRightBig')

    setTimeout(() => {
        slides[prevActive].classList.remove('active', 'animate__animated', 'animate__fadeOutRightBig')
    }, 400)

   
    dots[activeSlide].classList.remove('active')
    activeSlide = activeSlide - 1
    if (activeSlide < 0) {
        activeSlide = (slides.length - 1)
    }
    slides[activeSlide].classList.add('active', 'animate__animated', 'animate__fadeInLeftBig')
    dots[activeSlide].classList.add('active')
   
    setTimeout(() => {
        slides[activeSlide].classList.remove('animate__animated', 'animate__fadeInLeftBig')
    }, 400)


})


dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        slides[activeSlide].classList.remove('active')

        dots[activeSlide].classList.remove('active')

        activeSlide = i
        slides[activeSlide].classList.add('active')
        dot.classList.add('active')
    })
})