// JavaScript Memoization


function square(num) {
    return num *num;
}
// console.log(square(3));
// console.log(square(8888888888888888));



/*
* Name: memoSqr()
* This function creates a clouser to implement memorization
(caching results)
* It initializes an empty objects cache to store previously 
calculated square.
* It returns an inner function optimizedSrq()
*/

function memoSqr() {
    let cache = {}

    return function optimizedSrq(num) {
        if (num in cache) {
            console.log('Returning from Cache');
            console.log(cache);
            return cache[num]
        }
        else {
            const result = square(num);
            cache[num] = result;
            console.log("Computing Square");
            return result;
            //return (cache[num] = square(num));
            
        }
    };
}

// usages

const memoSquare = memoSqr();

console.log(memoSquare(4));
console.log(memoSquare(4));
console.log(memoSquare(4));
console.log(memoSquare(5));
console.log(memoSquare(99));

