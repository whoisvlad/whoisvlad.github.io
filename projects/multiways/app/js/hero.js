const heroBlock = document.querySelector('.container .hero')
const heroBlockDummyShadow = document.querySelector('.container .hero__dummy-shadow')
const heroHeader = document.querySelector('.container .hero h1')
const heroMeta = document.querySelector('.container .hero .hero__meta')

let heroBlockTop = heroHeader.offsetTop - 25
let distanceToTop = heroBlockDummyShadow.getBoundingClientRect().top

heroBlock.style.top = `-${heroBlockTop}px`

heroBlockDummyShadow.style.height = `calc(100% - ${heroBlockTop}px)`

window.addEventListener('resize', function (e) {
    heroBlockTop = heroHeader.offsetTop - 25
    heroBlock.style.top = `-${heroBlockTop}px`
    heroBlockDummyShadow.style.height = `calc(100% - ${heroBlockTop}px)`
    // height = heroBlockDummyShadow.offsetHeight
})

// let height = heroBlockDummyShadow.offsetHeight


// // Fade-In/Fade-Out for Hero on scroll
// // heroHeader - heading
// // heroMeta - meta block right under heading
// const range = 200
// // console.log(height);
// let distanceToTop = heroBlockDummyShadow.getBoundingClientRect().top + pageYOffset;
// // console.log(distanceToTop);


// // Get distance from element to top of window
// window.addEventListener('scroll', function (ev) {
//     // let someDiv = document.getElementById('someDiv');
//     let offset = height / 2
//     let scrollTop = heroBlockDummyShadow.getBoundingClientRect().top
//     // let distanceToTop = heroBlockDummyShadow.getBoundingClientRect().top + pageYOffset;
//     calc = 1 - (height - scrollTop) / height
//     // calcRev = 0 + ((distanceToTop - offset + range) / range);

//     console.log(scrollTop);
//     // console.log(offset);

//     heroBlock.style.opacity = `${calc}`
//     // heroBlockDummyShadow.style.opacity = `${calc}`
//     // heroHeader.style.opacity = `${calcRev}`
//     // heroMeta.style.opacity = `${calcRev}`

//     if (calc > '1') {
//         // heroBlockDummyShadow.style.opacity = `1`
//         // heroHeader.style.opacity = `0`
//         // heroMeta.style.opacity = `0`
//         heroBlock.style.opacity = `1`
//     } else if (calc < '0') {
//         // heroBlockDummyShadow.style.opacity = `0`
//         // heroHeader.style.opacity = `1`
//         // heroMeta.style.opacity = `1`
//         heroBlock.style.opacity = `0`
//     }

//     // console.log(distanceToTop);
// });