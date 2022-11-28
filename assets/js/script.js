document.querySelector('.header-menu-mobile > i').addEventListener('click', ()=>{
    document.querySelector('.menu-mobile').style.marginLeft = '-100vw';
});
document.querySelector('#bars').addEventListener('click', ()=>{
    document.querySelector('.menu-mobile').style.marginLeft = '0vw';
});
document.querySelectorAll('.menu-mobile ul li a').forEach(element => {
    element.addEventListener('click', ()=>{
        document.querySelector('.menu-mobile').style.marginLeft = '-100vw';
    });
});
document.querySelector('.scroll-button').addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});

window.onscroll = () => {
    window.scrollY > 0
    ? document.querySelector('ul.nav.nav-pills').style.height = "105px"
    : document.querySelector('ul.nav.nav-pills').style.height = "130px";
    
    window.scrollY > 250
    ? document.querySelector('.scroll-button').style.marginBottom = "30px"
    : document.querySelector('.scroll-button').style.marginBottom = "-100px";
}
window.onload = () => {
    setTimeout(()=>{
        document.querySelector('#devs .transparent div').style.opacity = '1';
        document.querySelector('#devs .transparent div').style.bottom = '0px';
    }, 400)
}
function getCountDown(){
    const fixZero = (time) => time < 10 ? `0${time}` : time;

    let now = new Date();
    let finalMatch = new Date(2022, 12, 18, 12, 00, 00);
    let diff = finalMatch - now;
    let format = new Date(diff);
    let d = fixZero(format.getDate());
    let h = fixZero(format.getHours());
    let m = fixZero(format.getMinutes());
    let s = fixZero(format.getSeconds());

    document.querySelector('.countdown--home-day').innerHTML = d + 'd';
    document.querySelector('.countdown--home-hours').innerHTML = h + 'h';
    document.querySelector('.countdown--home-minutes').innerHTML = m + 'm';
    document.querySelector('.countdown--home-seconds').innerHTML = s + 's';
}

setInterval(getCountDown, 1000);
getCountDown();

