
let message = 'Hello!'; 
setTimeout(() => {
 message = 'Goodbye!'; 
}, 0); 
console.log(message);
try {
    console.log("Start");
    throw new Error("Error occurred");
   } catch (err) {
    console.log(err.message);
   } finally {
    console.log("End");
   }
   console.log("A");
Promise.resolve().then(() => console.log("B"));
setTimeout(() => console.log("C"), 0);
console.log("D");