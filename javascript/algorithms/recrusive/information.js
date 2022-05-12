let counter =0;
function inception(){
    console.log(counter)
    //baseline
    if (counter > 3){
        return "done!"
    }
    counter++
    return inception() 
    //so the value will given back to the one who call the function
    // if not return, the value will lost in the stack of the recrusive
}


inception()

//rule of recrusive
//1. Indentify the base case ( Where to stop)
//2. Identify the recrusive case (counter > 3)
//3. Get closer and closer and return when needed.
// usually you have to 2 returns
