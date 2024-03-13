// const a = 0;

// const prom1 = new Promise((res , rej)=>{
//     if(a===0){
//         res('resolved promise 1')
//     }
//     rej('rejected promise 1')
// })
// const prom2 = new Promise((res , rej)=>{
//     if(a===10){
//         res('resolved promise 2')
//     }
//     rej('rejected promise 2')
// })
// const prom3 = new Promise((res , rej)=>{
//     if(a===0){
//         res('resolved promise 3')
//     }
//     rej('rejected promise 3')
// })
// const prom4 = new Promise((res , rej)=>{
//     if(a===0){
//         res('resolved promise 4')
//     }
//     rej('rejected promise 4')
// })

// Promise.all([prom1,prom2,prom3,prom4]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
// Promise.allSettled([prom1,prom2,prom3,prom4]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

// race
const a = 0;

const prom1 = new Promise((res , rej)=>{
   setTimeout(()=>{
    if(a===0){
        res('resolved promise 1')
    }
    rej('rejected promise 1')
   },2000)
})
const prom2 = new Promise((res , rej)=>{
  setTimeout(()=>{
    if(a===10){
        res('resolved promise 2')
    }
    rej('rejected promise 2')
  },3000)
})
const prom3 = new Promise((res , rej)=>{
   setTimeout(()=>{
    if(a===0){
        res('resolved promise 3')
    }
    rej('rejected promise 3')
   },1500)
})
const prom4 = new Promise((res , rej)=>{
   setTimeout(()=>{
    if(a===0){
        res('resolved promise 4')
    }
    rej('rejected promise 4')
   },1000)
})

Promise.race([prom1,prom2,prom3,prom4]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
