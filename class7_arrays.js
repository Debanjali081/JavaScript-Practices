let arr=[1,2,3,4,5,6,7]
console.log(arr);
console.log(arr.length);
console.log(`the arr[0] element is ${arr[0]}`)
console.log("The arr[3] element is " +arr[3])

arr[0]=13;
console.log(arr)

console.log("The datatype of arr is" +"  " +typeof arr);
console.log(arr.toString())
console.log(arr.join(" and "))
// console.log(arr.fill("all"))
console.log(arr.pop())
console.log(arr)
console.log(arr.push("Gugu"))
console.log(arr)
console.log(arr.shift()) // brother of pop
console.log(arr)
console.log(arr.unshift(13)) //brother of push
console.log(arr)

let b=[0,9,6,8,5]
let c=["chagala","dukhana","sukunu","dhana"]
let d=["56,89,67,89"]

console.log(` The combined array is : ${b.concat(c,d)}`)
console.log(b)

console.log(b.sort())
console.log(c.sort())
console.log(d.sort())

console.log(b.splice(1,3))
console.log(b)
console.log(b)