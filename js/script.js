//toggle class actiive 
const navbarNav= document.querySelector
('.navbar-nav');
//klik
document.querySelector('#humburger-menu').onclick=()=> {
    navbarNav.classList.toggle('active');
}

//klik luar
const humburger = document.querySelector ('#humburger-menu');

document.addEventListener('click',function(e) {
    if(!humburger.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})