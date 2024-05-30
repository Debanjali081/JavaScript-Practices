console.log("I am a Tutorial On Loops")

let a=1;

for(let i =0 ; i < 100 ; i++){
    console.log(a+i)
}

let obj={
    name : "Debanjali",
    role : "Programmer",
    company :"CodeWithHarry"
}

for(const key in obj){
    const element=obj[key];
    console.log(key,element)
}
for (const iterator of "Harry") {
    console.log(iterator)
    
}

let i=0;
while(i<6){
    console.log(i)
    i++;

}

let dw=0;
do {
    console.log(dw)
    dw++;
} while (dw<6);