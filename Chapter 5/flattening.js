let arrays = [[1, 2, 3], [4, 5], [6]];
arrays = arrays.reduce((acc, array) => acc.concat(array), []);
console.log(arrays);
// → [1, 2, 3, 4, 5, 6]
