/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port=3000;
const filepath="./files/"

app.get("/Files",(req,res)=>{
     
 function getDir(filepathe){
      return new Promise(function(resolve,reject){
          fs.readdir(filepathe,(err,data)=>{
            if(err){
              reject(err);
              return ;
            }
            resolve(data);
          });
      }) ;    
 }
 getDir(filepath).then((files)=>{
        res.send(files);
 }) 
})

app.get("/Files/a.txt",(req,res)=>{
      const fpath= req.query.pathname;
     function finddir(pathee){
      return new Promise((resolve,reject)=>{
            fs.readdir(pathee,(err,data)=>{
              if(err){
                  reject(err);
                  return ;
              }
              resolve(data);
            });
      });    

     }
     
     function findfile(pathe){
         return new Promise((resolve,reject)=>{
               fs.readFile(pathee,(err,data)=>{
                  if(err){
                    reject(err);
                    return ;
                  }
                  resolve(data);
               });
         });
     }

   finddir(filepath).then((files)=>{
    for(let i=0;i<files.length;i++){
      if(files[i]==fpath){
        const patheee= "/Files/fpath"
        findfile(patheee).then((data)=>{
          res.send(data);
        })
      }
    }
   })

})

app.listen(port,()=>{
 console.log("port start at "+port);
});
// app.listen(port);
// module.exports = app;