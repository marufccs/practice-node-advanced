const {errorHandler, two} = require('./errorHandler')

async function getData(){
    try{
        // undefined.find();
        const emailError = new Error('Email already exists!');
        throw emailError;
    }
    catch(error){
        errorHandler(error);
    }
}

getData();


console.log('Done');