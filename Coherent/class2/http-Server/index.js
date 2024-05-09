const express= require('express')
const port=3000;``

const app= express();

function calSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}
app.get('/',(req,res)=>{
    res.send(`Hello World`);
})

app.get("/sum",(req,res)=>{
    let n=req.query.n;
    let ans=calSum(n);
    res.send(ans.toString());
})
app.listen(port,()=>{
    console.log(`http listen at : ${port}`)
})