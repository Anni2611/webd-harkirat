//1-counter

let i=0;
let j=10;
// function counter(){
//     console.log(i);
//        i++;
//     if(i<=j){
//         setTimeout(counter,1000);
//     }
//     else console.log("counter stopped.");
// }


//2
// function counter(){
//     setInterval(function(){
//         console.log(i);
//         i++;
//         if(i>j){
//             console.log("stop");
//             clearInterval(counter);
//         }
//     },1000);

// }
// counter();


//3 read from file

const fs=require('fs');
fs.readFile('a.txt', (err, data) => {
    // if (err) throw err;
   
    console.log(data);
  });
// function anniread(){
//     let p= new Promise(function(resolve){
//         fs.readFile("a.txt",function(err,data){
//             resolve(data);
//         });

//         } );
//         return p;
//     }
// anniread().then(function(data){
//     console.log(data);
// })

// async function anni(){
//     let a= await anniread();
//     console.log(a);
// }
// anni();

