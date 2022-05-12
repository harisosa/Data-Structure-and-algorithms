function reverse(word){
    let result =""
    for (let i = word.length-1; i > -1; i--){
      result += word[i]
      
    }
    return result
  }

  
  reverse("Hi My name is haris")