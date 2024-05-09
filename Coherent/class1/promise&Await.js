
// function anniPrint(){
//     let p=new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("hello jii");
//         },5000);
//         // resolve("hi there");
//     });
        
        
//     return p;
// }

function avni(){
    let d=new Promise(function(resolve){
        setTimeout(function(){
            resolve("hekki");
        },5000);
    });
    return d;
}

async function main(){
    let d= await avni();
    console.log(d);
}
main();
// anniPrint().then(function(data){
//     console.log(data);
// })