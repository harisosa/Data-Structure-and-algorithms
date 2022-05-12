var containsDuplicate = function(nums) {
    var map = new Map()
    
    for(let i = 0;i < nums.length ; i++){
        if(map.has(nums[i])){
            return true
        }else{
            map.set(nums[i])
        }
    }
    return false
};


let a = containsDuplicate([1,1,1,3,3,4,3,2,4,2])

console.log(a)