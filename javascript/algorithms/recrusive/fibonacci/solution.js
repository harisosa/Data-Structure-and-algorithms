function fibonnaciIterative(n){
    let arr = [0,1]    

    for(let i=2 ;i < n+1;i++){
        const fib = arr[i-2] + arr[i-1]
        arr.push(fib)
    }
    return arr[n]
}//O(n)


function fibonacciRecusive(n){

    if (n < 2)
    {
        return n
    }

    return fibonacciRecusive(n-1) + fibonacciRecusive(n-2)
}//O(2^n)
// Exponential Time

console.log(fibonnaciIterative(43)) //faster
console.log(fibonacciRecusive(43))//slower 