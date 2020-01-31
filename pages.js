
// this is the data for holding which page we're on 
let pageNumber = 0;

//have the contents for these pages
const pages = [
    { copy: 'a NYC-based designer and developer', background: 'rgb(239, 186, 179)', circle: 'rgb(190, 70, 36)' }, 
    { copy: 'currently working on her portfolio', background: 'rgb(252, 153, 101)', circle: 'rgb(85, 93, 69)'}, 
    { copy: 'giving you links to her <a href="https://github.com/aylorbrown">GitHub</a> and <a href="https://www.linkedin.com/in/aylor-brown-a02609199/">Linkedin</a>', background: 'rgb(254, 137, 42)', circle: 'rgb(190, 70, 36)'}, 
    { copy: 'letting you <a href="mailto:aylorbrown@gmail.com?Subject=Hello%20Aylor!">contact</a> her for resume and work samples', background: 'rgb(254, 120, 38)', circle: 'rgb(234, 194, 99)'}

]

//pick the revelant tags 
const nextTag = document.querySelector('footer img.next');
const previousTag = document.querySelector('footer img.prev');
const randomTag = document.querySelector('footer img.random');
const outputTag = document.querySelector('h2');
const circleTag = document.querySelector('.circle');
const bodyTag = document.querySelector('body');

//make a next function to increase the page number 
const next = function () {
    pageNumber = pageNumber + 1; 

    if (pageNumber > pages.length - 1) {
        pageNumber = 0;
    }
    updateSection();
}

// make a precious function to decrease the pageNumber 
const previous = function () {
    pageNumber = pageNumber - 1; 

    if (pageNumber < 0) {
        pageNumber = pages.length - 1;
    }
    updateSection();
}

// pick a random slide 
const random = function () {
    pageNumber = Math.floor(Math.random() * pages.length)

    updateSection();
}


// this will update the sections content and style
const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy;
    circleTag.style.backgroundColor = pages[pageNumber].circle;
    bodyTag.style.backgroundColor = pages[pageNumber].background;
}

// on click of nextTag, run this
nextTag.addEventListener('click', function () {
    next()
})

// on click of previousTag, run this
previousTag.addEventListener('click', function () {
    previous();
})

// on click of randomTag, run this 
randomTag.addEventListener('click', function () {
    random();
})

// when a user presses a key, check for arrow left or right 
// and do next or previous correctly

document.addEventListener('keyup', function (event) {
    console.log(event);

    // if the key being pressed is arrowRight
    if (event.key == 'ArrowRight') {
        next()
    }  else if (event.key == 'ArrowLeft') {
        previous();
    }
    
})

// document.addEventListener('keydown', function () {
//     previous();
// })