function printArray(arr) {
  arr.map((item) => console.log(item));
  return arr.length;
}

console.log(printArray(["a", "b", "c", "d", "e"]));
