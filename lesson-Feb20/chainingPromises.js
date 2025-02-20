function getUserStocks() {
    return new Promise((resolve, reject) => {
        // get user investments from imaginary broker api
        // we simulate it with a timeout
        setTimeout(() => {
            // this function will execute when timer has finished   
            const investmentResults = {
                stocks: [
                    {
                        name: 'AAPL',
                        ownedCount: 5
                    },
                    {
                        name: 'NVDA',
                        ownedCount: 10
                    }
                ],
                netWorth: 10500
            };
            resolve(investmentResults);
        }, 2000)
    });
}

function getUserStockNews(userStockData) {
    return new Promise((resolve, reject) => {
        // simulate network request to some news provider
        setTimeout(() => {
            const newsResults = [
                {
                    title: 'New Iphone released',
                    date: '2025-02-20'
                },
                {
                    title: 'NVIDIA releases new performant AI chip',
                    date: '2025-02-19'
                }
            ];

            resolve({ userStockData, newsResults })
        }, 1000)
    });
}

console.log('Stock example of promise chaining starting..');
getUserStocks()
    .then(getUserStockNews)
    .then(finalResultsOfTheTwoOps => {
        // do something with the final results
        console.log(finalResultsOfTheTwoOps)
    });
console.log('Last code line of promise chain example');