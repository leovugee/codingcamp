var nums = [3, 0, 2, 0, 0, 5]

var moveZeroes = function(nums) {
    var i, temp;

    for (i = 0; i < nums.length-1; i++) {
        if(nums[i] === 0) {
            temp = nums.splice(i, 1);
            nums.push(temp[0]);
        }
    }
    return null;
};