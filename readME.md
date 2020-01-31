### Aylor Brown Portfolio Placeholder 
While I worked on my portfolio, I wanted to create a placeholder site with contact info and links to my GitHub and LinkedIn. I used it as an opportunity to practise my Javascript skills. 

![Aylor Brown portfolio placeholder Demo](assets/d46fkroVsC.gif)

## Features 

Uses an array of object to create the content for the pages

```javascript 
const pages = [
    { copy: 'a NYC-based designer and developer', background: 'rgb(239, 186, 179)', circle: 'rgb(190, 70, 36)' }, 
    { copy: 'currently working on her portfolio', background: 'rgb(252, 153, 101)', circle: 'rgb(85, 93, 69)'}, 
    { copy: 'giving you links to her <a href="https://github.com/aylorbrown">GitHub</a> and <a href="https://www.linkedin.com/in/aylor-brown-a02609199/">Linkedin</a>', background: 'rgb(254, 137, 42)', circle: 'rgb(190, 70, 36)'}, 
    { copy: 'letting you <a href="mailto:aylorbrown@gmail.com?Subject=Hello%20Aylor!">contact</a> her for resume and work samples', background: 'rgb(254, 120, 38)', circle: 'rgb(234, 194, 99)'}
]
```

Picks the relevant tags (we'll use this later)

```javascript
const nextTag = document.querySelector('footer img.next');
const previousTag = document.querySelector('footer img.prev');
const randomTag = document.querySelector('footer img.random');
const outputTag = document.querySelector('h2');
const circleTag = document.querySelector('.circle');
const bodyTag = document.querySelector('body');
```

Three functions: one to increase the page number, decrease the page number, and pick a random slide 

```javascript
const next = function () {
    pageNumber = pageNumber + 1; 

    if (pageNumber > pages.length - 1) {
        pageNumber = 0;
    }
    updateSection();
}
```

A function that updates each section 

```javascript
const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy;
    circleTag.style.backgroundColor = pages[pageNumber].circle;
    bodyTag.style.backgroundColor = pages[pageNumber].background;
}
```

A user can use the arrow right and left to move the next or previous 
page 

```javascript 
document.addEventListener('keyup', function (event) {
    console.log(event);

    // if the key being pressed is arrowRight
    if (event.key == 'ArrowRight') {
        next()
    }  else if (event.key == 'ArrowLeft') {
        previous();
    }  
})
```

![Man enjoying something on a computer screen](https://media.giphy.com/media/jKWL4eDMOoOanNyIuZ/giphy.gif)

I'm currently looking for new opportunities in NYC so hit me up! 

## Author
[Aylor Brown](http://aylorbrown.com)