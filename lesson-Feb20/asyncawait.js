function greetingsProcessor() {
    return new Promise((resolve, reject) => {
        // here we write now our operation which is asynchronous in nature
        setTimeout(() => {
            /*const success = Math.random() > 0.5;

            if(success) {*/
                const operationResult = "Hello Promise World";
                resolve(operationResult);
            /*} else {
                const failureResult = "Sad, the operation failed";
                reject(failureResult);
            } */       
        }, 2000);
    });
}

async function greetings() {
    console.log('greetings function starting')
    const result = await greetingsProcessor();
    console.log(result);
    console.log('greetings function finishing');
}


greetings();


