function errorHandler(error) {
    const { name, message, stack } = error;

    console.log(name, message);
    // logger.error({
    //     name,
    //     message,
    //     stack
    // })

    console.log('Internal Server Error!');
}

module.exports.two = function two() {
    console.log('two');
}

module.exports = {
    errorHandler,
    two 
}