const mixedArray = [3,13,74,14,66,15,22,4, 18, 99, 84, 45, 25, 44, 56];


const isEven = num => {
  return num % 2 == 0;
}

const filterArray = (arrayToFilter, filterFn) => {
  const filteredArray = [];

  arrayToFilter.forEach(num => {
    if (filterFn(num)) {
      filteredArray.push(num);
    }
  })

  return filteredArray;
}

console.log(filterArray(mixedArray, isEven));