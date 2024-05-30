document.querySelector(".box")
{/* <div class="box"> */ }

document.querySelector(".box").innerHTML
// "Hey I am a Box"
document.querySelector(".container")
null
document.querySelector(".container").inneText

document.querySelector(".container").innerHTML

//   <div class="box">Hey I am a Box</div>

document.querySelector(".container").innerText

// "Hey I am a Box" 

document.querySelector(".container").outerHTML

{/* <div class="container">
        <div class="box">Hey I am a Box</div>
    </div> */}

document.querySelector(".container").outerText

// "Hey I am a Box"

document.querySelector(".container").tagName

// "DIV"

document.querySelector(".container").nodeName

// "DIV" 

document.querySelector(".container").textContent

// "
//         Hey I am a Box
//     " 

document.querySelector(".container").hidden

// false

document.querySelector(".container").hidden = true

// true 

document.querySelector(".box").innerHTML = "Hey am Gulu"
// "Hey am Gulu"
document.querySelector(".box").hasAttribute("style")
// false
document.querySelector(".box").getAttribute("style")
// null

document.querySelector(".box").setAttribute("style", "display: inline")
// undefined
document.querySelector(".box").setAttribute("style", "display: flex")
// undefined
document.querySelector(".box").hasAttribute("style") 

document.querySelector(".box").attributes

//NamedNodeMap [ class="box", style="display: flex" ]

document.querySelector(".box").removeAttribute("style")
//undefined
document.querySelector(".box").hasAttribute("style")
//false
document.designMode="on"
//"on" 

document.querySelector(".box").dataset

//DOMStringMap { createdby → "Debanjali" }

document.querySelector(".box").dataset

// DOMStringMap { createdby → "Debanjali", conceptby → "Gugu" }

let div = document.createElement("div");
div.innerHTML="I have been inserted an element "
div.setAttribute("class","created");
document.querySelector(".container").append(div)


document.querySelector(".container").classList

// DOMTokenList(3) [ "container", "white", "bg-green" ]
// ​
// 0: "container"
// ​
// 1: "white"
// ​
// 2: "bg-green"
// ​
// length: 3
// ​
// value: "container white bg-green

document.querySelector(".container").className
"container white bg-green"
document.querySelector(".container").classList .add("Debu")
undefined
document.querySelector(".container").classList.remove("Debu") 

document.querySelector(".container").classList.toggle("red")
true
document.querySelector(".container").classList.toggle("white")
false 