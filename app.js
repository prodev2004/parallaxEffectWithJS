const move = document.querySelectorAll('.move');
// we'll select all the element with the class of move
const info = document.querySelector('header .info');

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    move.forEach(element => {
        let speed = element.dataset.speed;

        element.style.transform = `translateY(${scroll * speed}px)`;
        info.style.transform = `translate(-25%, ${scroll * speed}px)`;
    })
})


// cool effect huh...