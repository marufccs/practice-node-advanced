// 3 steps of Promise
// 1. pending
// 2. resolved 
// 3. rejected

// Create a Promise
const myPromise = new Promise((resolve, reject) => {
    const user = { id : 1};
    if(!user){
        reject('Something went wrong!')
    }
    else {
        setTimeout(() => {
            resolve('Successfully got the data');
        }, 1000);
    }
})

// to run the promise 
myPromise 
.then(res => console.log(res))
.catch(err => console.log(err))