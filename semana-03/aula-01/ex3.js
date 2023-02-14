function checkOddsAndEvensFromArray(arr) {
  const evens = arr.filter((n) => n % 2 === 0).length;
  return `O array possui ${arr.length} números, ${
    arr.length - evens
  } impares e ${evens} pares.`;
}

console.log(checkOddsAndEvensFromArray([1, 2, 3, 4, 5, 6, 7, 89, 9]));
