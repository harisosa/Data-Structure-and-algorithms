function reverse(str){

   if(str === ""){
       return ""
   }else{
    return reverse(str.substr(1))+str.charAt(0)
   }
}


function reverseIteractive(str){
    let array = []

    for(let i =str.length; i > 0;i--){
        array.push(str[i-1])
    }

    return array.join("")
}
console.log(reverseIteractive("word"))
//console.log(reverse("word"))