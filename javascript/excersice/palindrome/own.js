/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str =  x.toString()

    let len = str.length
    let strArr =[]


    for(let i = len; i >= 0;i--){
        strArr.push(str[i])
    }

    let reverse = strArr.join("")
    if (reverse == x){
        return true
    }else{
        return false
    }
 };






 console.log(isPalindrome(10))