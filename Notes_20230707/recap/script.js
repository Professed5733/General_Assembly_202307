const nums = [32, 33, 140, 40];

const greaterThan18 = (num) => num > 18;

console.log(nums.every(greaterThan18));

console.log(nums.filter(greaterThan18));

console.log(nums.find(greaterThan18));

console.log(nums.findIndex(greaterThan18));

console.log(nums.some(greaterThan18));

const print = (item) => console.log(item);

nums.forEach(print);

// forEach(num in nums){
//     console.log(num)
// }

console.log(nums.map(greaterThan18));

let total = nums[0];
for (let i = 1; i < nums.length; i++) {
  total += nums[i];
}
console.log(total);
