var typed = new Typed(".text",{
    strings:["Web Developer","Front-End Developer","Fresher","Student","YouTuber"],
    typeSpeed:100,
    backSpeed:60,
    backDelay:1000,
    loop:true
})

var sidemenu = document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
