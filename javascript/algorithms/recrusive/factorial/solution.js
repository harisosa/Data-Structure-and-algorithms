function findFactorialRectusive(number){
    if(number === 2){
        return 2
    }
    return number*findFactorialRectusive(number-1)
    

}//O(n)




function findFactorialIterative(number){
    let answer = 1
    if(number === 2){
        answer = 2
        return
    }
    for(let i=2; i <= number ; i++){
        answer = answer*i;
    }
    return answer
}//O(n)



let x = findFactorialRectusive(5)
let y = findFactorialIterative(5)


console.log(x)
console.log(y)