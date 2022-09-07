const iconMenu = document.getElementById('icon-menu');
const navList = document.querySelector('ul')
iconMenu.addEventListener('click', () =>{
    if(navList.style.maxHeight==="0px"){
        navList.style.maxHeight="70vh"
        iconMenu.src = "./assets/x_icon_172101.svg"
    }
    else{
        navList.style.maxHeight="0px"
        iconMenu.src="./assets/icon-menu.svg"
    }
})