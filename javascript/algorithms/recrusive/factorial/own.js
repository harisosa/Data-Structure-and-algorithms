function findFactorialRectusive(number){
    let answer=1
    if(number === 1){
        return number
    }
    answer *= number*findFactorialRectusive(number-1)
    return answer
    

}




function findFactorialIterative(number){
    let answer = 1
    for(let i=0; i < number ; i++){
        answer *= number-i;
    }
    return answer
}



let x = findFactorialRectusive(5)
let y = findFactorialIterative(5)


console.log(x)
console.log(y)