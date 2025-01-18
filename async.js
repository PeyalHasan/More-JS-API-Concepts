
const myLoader =() =>{
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if(success <= 0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}
myLoader()


let sum = 0;
const clockId = setInterval(()=>{
    sum++
    // console.log(clockId, sum)

}, 2000)


let num = 0;

let intervalId = setInterval(() => {
//   console.log("Counting: " + count);
  count++;

  if (num === 5) {
    clearInterval(intervalId);  // Stops after 5 counts
    // console.log("Stopped");
  }
}, 1000);

let count = 10;

let timer = setTimeout(function countdown() {
//   console.log(count);
  count++;

  if (count > 0) {
    timer = setTimeout(countdown, 1000);
  }
}, 1000);

// Stop countdown after 3 seconds
setTimeout(() => {
  clearTimeout(timer);
//   console.log("Countdown stopped");
}, 3000);

const  DelayedGreeting =(name,delayTime) =>{
    setTimeout(()=>{
        // console.log(`Hello, ${name}`)
    }, delayTime)
}

DelayedGreeting('Alice', 2000)

function tellJoke(){
    const intervalId = setInterval(()=>{
        // console.log("Why don't skeletons fight each other?")
    }, 2000)
    setTimeout(()=>{
        clearInterval(intervalId)
        // console.log('10 s Up')
    },10000)
}
tellJoke()

const loadAsync = async()=>{
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    const data = await res.json()
    console.log(data.joke)
}
loadAsync()
