var typed= new typed(".text",{
    Strings:["Student,Fresher,Frontend Developer","Youtuber","Web Devoloper"],
    typespeed:100,
    backspeed:60,
    backDelay:1000,
    loop:true

});

var sidemenu = document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
