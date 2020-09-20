/* Given a non-empty array of integers, every element appears twice except for one. Find that single one. */
// input: [1,2,3,2,1]

const singleNumber = (nums) => {
  nums.sort((a, b) => a - b);
  //I sort the array so I'm can just compare the next value.
  for (let i = 0; i < nums.length; i += 2) {
    //Loop through sorted arr
    if (nums[i] !== nums[i + 1]) return nums[i];
    //since each appears twice OR once, I can just look for the lone boi by comparing.
  }
  return 0;
  //if the arr for some reason has only doubles...
};

// (っ▀¯▀)つ
