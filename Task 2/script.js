let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window-onscroll = () =>{
    menu.classList.remove('fa-times');
    menu.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
       header.classList.remove('active');
    }
}

let countDate = new Date('july 17, 2024 00:00:00').getTime();

function CountDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (gap));
    let h = Math.floor((gap % (day))/ (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innertext = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('secound').innerText = s;
}

setInterval(function(){
    CountDown();
},1000)