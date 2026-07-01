class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
  twoSum(nums, target) {
    let n = nums.length;
    let map = {};
    
    for(let i = 0; i < n; i++) {
        map[nums[i]] = i;
    }

    for(let i = 0; i < n; i++) {
        let pairToFind = target - nums[i];
        if (pairToFind in map && map[pairToFind] !== i) {
            return [i, map[pairToFind]];
        }
    }
    return [];
}; 
};