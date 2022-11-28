window.onscroll = () => {
    window.scrollY > 0
    ? document.querySelector('ul.nav.nav-pills').style.height = "105px"
    : document.querySelector('ul.nav.nav-pills').style.height = "130px";
}

function getCountDown(){
    let now = new Date();
    let firstMatch = new Date(2022, 12, 18, 12, 00, 00);
    let diff = firstMatch - now;
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
function fixZero(time){
    return time < 10 ? `0${time}` : time;
}
setInterval(getCountDown, 1000);
getCountDown();

