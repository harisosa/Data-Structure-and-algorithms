var maxSubArray = function(nums) {
    maxSub = new Array()
    maxSub.push(nums[0])
    currentSum = 0
    
    for (let i = 0;i < nums.length;i++){
        if(currentSum <0){
            currentSum = 0
        }
        currentSum += nums[i]
        maxSub.push(currentSum)
    }
    return Math.max(...maxSub)
};

let a = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])

console.log(a)