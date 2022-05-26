// Задание 1
function getArrayParams(arr) {
  let min = arr[0], max = arr[0], sum = arr[0], avg;

  for (let i=1; i < arr.length; i++) {
    if (arr[i] < min){
      min = arr[i];
    }
    if (arr[i] > max){
      max = arr[i];
    }
    sum = sum + arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i=0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity, workResult;

    for (let i=0; i < arrOfArr.length; i++) {
    workResult = func(arrOfArr[i]);
    if (workResult > max) {
      max = workResult;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0], max = arr[0]; 
  for (let i=1; i < arr.length; i++) {
    if (arr[i] < min){
      min = arr[i];
    }
    if (arr[i] > max){
      max = arr[i];
    }
  }
  return Math.abs(max - min);
}
  // Ваш код

