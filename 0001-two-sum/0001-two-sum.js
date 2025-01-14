/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

  /*
    var difference = ??
    subtract target from number
    return difference location, i if they add up to target

    for (let i = 0; i < nums.length, i++){
        var difference = None

    }
 */

var twoSum = function(nums, target) {
    const hashmap = {};
    for (let i = 0; i < nums.length; i++){ 
        var difference = target - nums[i] 
        if (!(difference in hashmap)){ 
            hashmap[nums[i]] = i
        } else { // 
            return [hashmap[difference], i] 
        }
    } 
};
