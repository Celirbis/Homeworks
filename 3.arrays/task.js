function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  else return arr1.every((element, idx) => element === arr2[idx]);
}

function advancedFilter(arr) {
return arr.filter((number) => number > 0 && number % 3 === 0).map(number => number * 10);
}
