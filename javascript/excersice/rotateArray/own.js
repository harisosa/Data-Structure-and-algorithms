var rotate = function(nums, k) {
    
    for(let i = 0; i < k ;i++){
        let pop = nums.pop()
        nums.unshift(pop)
    }
    return nums
};