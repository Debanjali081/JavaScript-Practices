let button = document.getElementById("btn")

// button.addEventListener("click", () => {
//     // alert("I host click")
//     document.querySelector(".box").innerHTML = "<b> hey you are one clicked</b> Enjoy Your Click"

// })

button.addEventListener("dblclick", () => {
    // alert("I host click")
    document.querySelector(".box").innerHTML = "<b> hey you are one clicked</b> Enjoy Your Click"

})
button.addEventListener("contextmenu",()=>{
    alert("Hey am context menu")
})


button.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keyCode)
})