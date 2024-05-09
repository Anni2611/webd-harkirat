const express= require('express')

const port=3001;
const app= express();

  app.use(express.json())  // to take input from user (not from url but from postman)
const users=[{
        userName:"anni",
        kidneys: [{
            healthy:true
        },
        {
            healthy:false
        }
    ]
}];


app.get("/",(req,res)=>{
          const name=users[0].userName;
          const kidney=users[0].kidneys;
          const noOfKidney=kidney.length;
          let noOfHealthyKidney=0;
          for(let i=0;i<noOfKidney;i++){
            if(kidney[i].healthy==true) noOfHealthyKidney++;
          }
          let noOfUnhealthyKidney=noOfKidney-noOfHealthyKidney;
          res.json({
               name,noOfKidney,noOfHealthyKidney,noOfUnhealthyKidney
           })
})

app.post("/",(req,res)=>{
    const isHealthy= req.body.isHealthy;
    let kidney=users[0].kidneys;
   
        const newKidney={
            healthy:isHealthy
    }
    kidney.push(newKidney);
    
    
    const name=users[0].userName;
    // res.json(`the work is done for ${name}`)
    res.json(
        `an ${isHealthy} kidney is done by ${name}`
    )
})

app.put("/",(req,res)=>{
    let kidney=users[0].kidneys;

    for(let i=0;i<kidney.length;i++){
        if(kidney[i].healthy==false) kidney[i].healthy=true;
    }
    let name=users[0].userName;
    res.json({
        name,
        kidney
    })
})
 
app.delete("/",(req,res)=>{
    let kidney=users[0].kidneys;
    for(let i=0;i<kidney.length;i++){
        if(kidney[i].healthy==false){
            kidney.splice(i,1);
            i--;
        }
    }
    const name=users[0].userName;
    res.send(`work is done for ${name}`)
})


app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})