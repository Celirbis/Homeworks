function cachingDecoratorNew(func) {
  let cache = {};

  function wrapper(...args) {
    const hash = args.join(',');

    if (hash in cache) {
      return ("Из кэша: " + cache[hash]);
    } 

    if (Object.keys(cache).length === 5) {
      delete cache[Object.keys(cache)[1]];
    }

    let result = func(...args);
    cache[hash] = result;
    return ("Вычисляем: " + result);
    
  } 
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = false;
  
  return function (...args) {
      clearTimeout(timeout);
    if (!flag) {
      func(...args);
      flag = true;
    } 
    timeout = setTimeout(() => {
        func.apply(this, args);
        flag = false;
      }, ms);
  };
}

function debounceDecorator2(func, ms) {
  let timeout;
  let flag = false;
  
  function wrapper(...args) {
      wrapper.count++;
      clearTimeout(timeout);
    if (!flag) {
      func(...args);
      flag = true;
    } 
    timeout = setTimeout(() => {
        func.apply(this, args);
        flag = false;
      }, ms);
  }
  wrapper.count = 0;
  return wrapper;
}
