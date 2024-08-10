let btn = document.querySelector("button")
let nav = document.querySelector(".btn")
let btn1 = document.getElementById("btn")
const mdw = window.matchMedia("(max-width:819px)")
btn1.onclick=function(){
    nav.style.display="flex";
    btn1.style.display="none";
    btn.style.display="flex"
}
btn.onclick=function(){
    nav.style.display="none";
    btn1.style.display="flex";
    btn.style.display="none"
}
if(mdw==true){
    nav.style.display="none";
    btn1.style.display="flex";
    btn.style.display="none";
}

let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let service = document.getElementById("cards")
let project = document.getElementById("part")

btn2.onclick=function(){
    service.style.display="flex";
    project.style.display="flex";
}
btn3.onclick=function(){
    service.style.display="flex";
    project.style.display="none";
}
btn4.onclick=function(){
    service.style.display="none";
    project.style.display="flex";
}
let ntft = window.innerWidth
console.log(ntft);
