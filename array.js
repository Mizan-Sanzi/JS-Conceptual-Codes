const numbers = [34, 56, 35, 67, 87, 65, 63];
console.log(numbers);
console.log(numbers.length); //length of the array named 'numbers'
console.log(numbers.indexOf(67)); //index number of any specific value of an array

// finding the value of any array by giving the index number
const x = numbers[2];
console.log(x);

// adding value to an array
console.log(numbers);
numbers.push(80);
console.log(numbers);
numbers.pop();
console.log(numbers);

// saving any popped value of any array
const s = numbers.pop();
console.log(s);

// concat'ing array
const fruits = ['mango', 'banana', 'apple', 'orange'];
const flower = ['rose', 'abcd', 'efgh', 'ijkl'];
const added = fruits.concat(flower);
console.log(fruits);
console.log(flower);
console.log(added);
const added2 = flower.concat(fruits, numbers);
console.log(added2);

// includes...
console.log(added2.includes(34));
console.log(flower.includes('abcd'));
console.log(flower.includes('oic'));

// .join creates a string all the value from an array
const join = fruits.join();
console.log(join);

// split...
const reverseOfJoin = join.split(",");
console.log(reverseOfJoin);
console.log(typeof(reverseOfJoin));

// checking an Array
console.log(Array.isArray(reverseOfJoin));

// slice
console.log(fruits.slice(1, 3));

// shift----shift is opposite of pop because pop delete from last shift delete from first //unshift is opposite of push!
console.log(fruits.pop());
console.log(fruits.shift());