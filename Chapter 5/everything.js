function every(array, test) {
  let result = true;
  for (let el of array) {
    result = test(el);
    if (!result) break;
  }
  return result;
}

function everySome(array, test) {
  return !array.some(el => !test(el));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
