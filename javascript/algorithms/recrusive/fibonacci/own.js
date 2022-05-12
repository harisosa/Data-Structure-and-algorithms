function fibonnaciIterative(n){
    if (n===0)
    {
        return 0
    }
    if (n===1){
        return 1
    }
    let firstTwo = [0,1]    

    for(let i=1 ;i < n;i++){
        const fib = firstTwo[i] + firstTwo[i-1]
        firstTwo.push(fib)
    }
    return firstTwo[firstTwo.length-1]
}
console.log(fibonnaciIterative(10))

function fibonacciIterativeRecusive(n){

    if (n===0)
    {
        return 0
    }
    if (n===1){
        return 1
    }

    

}