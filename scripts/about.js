let musicLabelCards = document.querySelectorAll('.aboutpage>section:nth-of-type(5)>section>section>p')
let musicLabelImg = document.querySelector('.aboutpage>section:nth-of-type(5)>section>img')

// Met for loop reset elke kaart naar transparant, daarna de mouseover kaart kleur vullen
musicLabelCards.forEach((card, i) => {
    card.addEventListener('mouseover', () => {
        for (j = 0; j < 3; j++) {
            // console.log('hello');

            musicLabelCards[j].style.backgroundColor = 'transparent'

            card.style.backgroundColor = '#1a1a1a'
        }
    })
})


// Elke kaart geeft een andere src image
musicLabelCards[0].addEventListener('mouseover', () => {
    musicLabelImg.src = './assets/images/aboutpage/5/1.png'
})

musicLabelCards[1].addEventListener('mouseover', () => {
    musicLabelImg.src = './assets/images/aboutpage/5/2.png'
})

musicLabelCards[2].addEventListener('mouseover', () => {
    musicLabelImg.src = './assets/images/aboutpage/5/3.png'
})


let parallaxCards = document.querySelectorAll('.aboutpage>section:nth-of-type(2)>ul>li')

// Luistert naar scroll, de window.scrollY is hoeveel van boven je bent gescrollt
// de speedFront speedBack zijn soort van multipliers die ik op translateY zet van de elementen
window.addEventListener('scroll', (e) => {
    let offset = window.scrollY
    let speedFront = offset * -.4
    let speedBack = offset * -.2

    for (i = 0; i < 3; i++) {
        parallaxCards[i].style.transform = 'translateY(' + speedFront + 'px)'
    }

    for (i = 3; i < 6; i++) {
        parallaxCards[i].style.transform = 'translateY(' + speedBack + 'px)'
    }
})