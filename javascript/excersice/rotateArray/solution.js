var rotate = function(nums, k) {

    while(k > nums.length) {
        k = k - nums.length;
    }
    
    let swivel = nums.splice(-k,k) //negative integer as first argument starts from the end
    nums.splice(0,0,...swivel);

    return nums
}


let a = rotate([1,2,3,4,5,6,7],3)
console.log(a)