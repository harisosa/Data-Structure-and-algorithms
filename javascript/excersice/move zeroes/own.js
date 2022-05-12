var moveZeroes = function(nums) {
    const result = [];
    let counterZero = 0;
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] === 0){
            counterZero++        
        }else{
           result.push(nums[i])  
        }
    }
    for (let j=0;j<counterZero;j++){
    	result.push(0)
    }
    return result
};


let a = moveZeroes([0,1,0,3,12])
console.log(a)
