const containerTag = document.querySelector('section.container');
const imageTag = document.querySelector('section img.container-pic');
const bioTag = document.querySelectorAll('header h2');

let shadowTag = document.querySelector('.shadow');
const headerTag = document.querySelector('header');

function ease(ratio) {
    return ratio * 1;
}

function initShadow() {
    shadowTag.style.width = containerTag.getBoundingClientRect().width + 'px';
    shadowTag.style.height = containerTag.getBoundingClientRect().height + 'px';
}

initShadow();

window.addEventListener('resize', () => {
    initShadow();
})

headerTag.addEventListener('mousemove', (e) => {
    const xRatio = (e.clientX / window.innerWidth) * 2 - 1;
    const yRatio = (e.clientY / window.innerHeight) * 2 - 1;

    const xCoord = (window.innerWidth / 2 - e.x) / 4;
    const yCoord = e.y / 5;

    const speed = 16;

    let xRatioEased = 0;
    let yRatioEased = 0;
    if (xRatio >= 0) {
        xRatioEased = ease(xRatio);
    } else {
        xRatioEased = -ease(-xRatio);
    }

    if (yRatio >= 0) {
        yRatioEased = ease(yRatio)
    } else {
        yRatioEased = -ease(-yRatio)
    }

    bioTag.forEach(phrase => {
        phrase.style.transform = `translate3D(${-xCoord / 3}px,  ${-yCoord / 3}px, ${0})`;
    })

    imageTag.style.transform = `scale(1.2) translate3D(${xRatioEased * speed * 2}px, ${yRatioEased * speed * 2}px, ${0})`;
    containerTag.style.transform = `translate3D(calc(-50% + ${xRatioEased * speed * 2}px), calc(-50% + ${yRatioEased * speed * 2}px), ${0})`;
    shadowTag.style.transform = `translate3D(calc(-50% + ${xRatioEased * speed * 2}px), calc(-50% + ${yRatioEased * speed * 2}px), ${0})`;
})
