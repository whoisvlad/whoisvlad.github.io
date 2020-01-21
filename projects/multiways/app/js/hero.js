const heroBlock = document.querySelector('.container .hero')
const heroBlockDummyShadow = document.querySelector('.container .hero__dummy-shadow')
const heroHeader = document.querySelector('.container .hero h1')
const heroMeta = document.querySelector('.container .hero .hero__meta')

let heroBlockTop = heroHeader.offsetTop - 25

heroBlock.style.top = `-${heroBlockTop}px`
heroBlockDummyShadow.style.height = `calc(100% - ${heroBlockTop}px)`

window.addEventListener('resize', function (e) {
    heroBlockTop = heroHeader.offsetTop - 25
    heroBlock.style.top = `-${heroBlockTop}px`
    heroBlockDummyShadow.style.height = `calc(100% - ${heroBlockTop}px)`
})

window.addEventListener('scroll', function (e) {
    let distanceToTop = heroHeader.offsetTop
    let elementHeight = heroBlockDummyShadow.offsetHeight
    let scrollTop = window.pageYOffset - distanceToTop
    calc = (elementHeight - scrollTop) / elementHeight;
    console.log(heroHeader.offsetTop );

    heroBlock.style.opacity = `${calc}`

    if (calc > '1') {
        heroBlock.style.opacity = `1`
    } else if (calc < '0') {
        heroBlock.style.opacity = `0`
    }
});