function greetingsProcessor() {
    return new Promise((resolve, reject) => {
        // here we write now our operation which is asynchronous in nature
        setTimeout(() => {
            const success = Math.random() > 0.5;

            if(success) {
                const operationResult = "Hello Promise World";
                resolve(operationResult);
            } else {
                const failureResult = "Sad, the operation failed";
                reject(failureResult);
            }        
        }, 2000);
    });
}

console.log('Now the promise example exeuction begins');
greetingsProcessor()
    .then(resultOfThePromise => {
        console.log(resultOfThePromise);
    })
    .catch(errorResult => console.log(errorResult) )

console.log('This is the last line of code in promise example');