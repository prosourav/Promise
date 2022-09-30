let state = true;
const myPromise = new Promise((resolve,reject) =>{
  if(!state){
    reject('Something went wrong!');
  }else if(state){
    setTimeout(()=>{
      resolve('Successfully got data');
    },1000)
  }
}); 

myPromise
.then((res)=>console.log(res))
.catch((res)=>console.log(res));

const arr = [1,2,3,4];
const userData=[];

// this will return empty userData due to async behaviour 
arr.forEach((i)=>{
myPromise
.then((res)=>userData.push(res))
.catch((res)=>console.log(res));
});

// so we will do it this way
arr.forEach((i)=>{
  userData.push(myPromise);
});

Promise.all(userData)
.then(res=>console.log(res))
.catch(res=>console.log(res));

