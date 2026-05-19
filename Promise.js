//Promise is an object which helps to handle asynchronise code
//let promise=new Promise((resolve,reject)=>{
    //code
   // })
    //new Promise-- create a promise object
    //resolve--success
    //reject--failure

    //handling promise
   // promise.then(()=>{
        //code
   // })
   // .catch(()=>{
       //code 
   // })
let number=10
let oddoreven= new Promise((resolve,reject)=>{
    if(number%2==0){
        resolve("even number")
    }
    else{
        reject("odd number")
    }
})
//handling Promise
oddoreven.then((Resolvedmsg)=>{
    console.log(Resolvedmsg)
})
.catch((errMsg)=>{
    console.log(errMsg)
})
