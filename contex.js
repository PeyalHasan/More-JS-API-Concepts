console.log(1);
console.log(2);
setTimeout(()=>{
    doSomething()
}, 3000)
console.log(4);
console.log(5);


function doSomething(){
    console.log(3)
}