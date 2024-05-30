function nice(name) {
    console.log("Hey " + name + "You Are Too Good !!")
    console.log("Hey " + name + "You Are Too Good !!")
    console.log("Hey " + name + "You Are So Nice !!")
    console.log("Hey " + name + "You Are So Cute !!")
    console.log("Hey " + name + "You Are So Sweet !!")
}

nice("Baby")

nice("Gobi")

// function sum(a, b) {
//     return a + b
// }

// result = sum(13, 5)

// console.log("The sum of  two numbers is :", result)



function sum(a, b, c = 5) {
    return a + b + c
}
let a;
let b;
result = sum(13, 5)

console.log(`The sum of  ${a}  and ${b}  is :`, result)



// ARROW FUNCTION

const func1 = (x) => {
    console.log("I am an arrow function", x)
}

func1(135);
func1(13);
func1(5);