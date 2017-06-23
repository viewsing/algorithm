/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if (nums.length > 0) {
        var i=0;
        var obj={};
        for(i; i<nums.length; i++) {
            if (obj[nums[i]]) {
                return nums[i]
            } else {
                obj[nums[i]] = true;
            }
        }
    } else {
        return -1;
    }
};