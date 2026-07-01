var btn1=document.getElementById("like")
var btn2=document.getElementById("dislike")

btn1.addEventListener("click",handleClick)

function handleClick(){
    alert("button is clicked")
    var k=document.querySelector("#h")
    k.innerText++;
    k.style.color="green"
    
}

btn2.addEventListener("click",handleClick1)

function handleClick1(){
    alert("button is clicked")
    var k=document.querySelector("#h1")
    k.innerText++;
    k.style.color="red"
    
}