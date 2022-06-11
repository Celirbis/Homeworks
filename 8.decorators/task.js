function cachingDecoratorNew(func) {
  let cache = {length: 0};

  function wrapper(...args) {
    const hash = args.join(',');

    if (hash in cache) {
      return ("Из кэша: " + cache[hash]);
    } else {
      if (cache.length === 5) {
      delete cache[Object.keys(cache)[1]];
      }
      else {
        cache.length++;
      }
      let result = func(...args);
      cache[hash] = result;
      return ("Вычисляем: " + result);
    }
  } 
  return wrapper;
}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
