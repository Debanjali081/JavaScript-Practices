console.log("Harry Bhai !!")

let boxes=document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor="red"



document.querySelector(".box").style.backgroundColor="gray";

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="gray";
})

document.getElementById("gbox").style.backgroundColor="green"