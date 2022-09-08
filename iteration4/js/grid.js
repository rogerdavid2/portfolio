const divTag = document.querySelectorAll('section article.project-div');
const slideArea = document.querySelector('section.project-box');
const projectArea = document.querySelector('section.project-container');
console.log(projectArea);

let curSlide = 0;
let z = 1;

slideArea.addEventListener('click', () => {
    curSlide++;
    if (curSlide > divTag.length) {
        curSlide = 0;
    }
    z++;
    divTag.forEach(div => {
        div.style.animation = '';
    })

    divTag[curSlide].style.zIndex = z;
    divTag[curSlide].style.animation = 'fade 0.5s';
})


/*
  There are n^2 possible coordinates each div move towards on hover
  5^2 = 25 possible coordinates in this case
  on a [-50, -25, 0, 25, 50] range

*/
slideArea.addEventListener('mouseover', () => {
    divTag.forEach(div => {
        const x = 25 * (Math.floor(Math.random() * 5)) - 50
        const y = 25 * (Math.floor(Math.random() * 5)) - 50
        div.style.transform = `translate3D(${x}px, ${y}px, 0)`;
    })
})

slideArea.addEventListener('mouseout', () => {
    divTag.forEach(div => {
        div.style.transform = '';
    })
})