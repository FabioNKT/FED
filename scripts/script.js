// JavaScript Document
// console.log("hi");

const heroCarousel = document.querySelector('.homepage>section:nth-of-type(2)>section>ul')
const heroArrows = document.querySelectorAll('.homepage>section:nth-of-type(2)>section button')
const heroCardWidth = document.querySelector('.homepage>section:nth-of-type(2)>section li').offsetWidth

// console.log(heroCardWidth);

let isDragging = false
let startMouseX
let startScrollLeft


// Event listener voor next en back button met forEach call ik beide buttons, 
// kijk welke button die aanspreekt en geef de gepaste scrollLeft afstand
heroArrows.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        if (i === 0) {
            heroCarousel.scrollLeft += -heroCardWidth
        } else {
            heroCarousel.scrollLeft += heroCardWidth
        }
    })
})

// Op mousedown zet isDragging op true en verander cursor dmv class, 
// neem het begin punt van waar je heb geklikt en wat de stand van de 
// scrollLeft was
heroCarousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    heroCarousel.classList.add('dragging')

    startMouseX = e.pageX
    startScrollLeft = heroCarousel.scrollLeft

})

// Op mouseup reset alles
heroCarousel.addEventListener('mouseup', () => {
    isDragging = false;
    heroCarousel.classList.remove('dragging')
    heroCarousel.classList.remove('overDraggable')
})

// Op mousemove, als isDragging true is, dus als je muis ingedrukt is, dan voeg
// het verschil van pageX en startpunt van je muis toe aan waar de scrollLeft begon
// Dit zorgt ervoor dat je een slepende beweging krijgt
heroCarousel.addEventListener('mousemove', (e) => {
    if (isDragging) {
        heroCarousel.scrollLeft = startScrollLeft - (e.pageX - startMouseX);
    }

})

// Voor weer andere cursor
heroCarousel.addEventListener('mouseover', () => {
    heroCarousel.classList.add('overDraggable')
})

// Reset scroll positie
heroCarousel.scrollTo(0, 0)


/////////////////////////////////////////////////////