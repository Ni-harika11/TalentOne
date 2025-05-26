function throttle(func, delay) {
    let timeout = null;
    let lastArgs = null;
  
    return function (...args) {
      if (!timeout) {
        func.apply(this, args);
        timeout = setTimeout(() => {
          timeout = null;
          if (lastArgs) {
            func.apply(this, lastArgs);
            lastArgs = null;
          }
        }, delay);
      } else {
        lastArgs = args;
      }
    };
  }
  
  function onScroll() {
    console.log('Scroll event fired at', new Date().toLocaleTimeString());
  }
  
  const throttledScroll = throttle(onScroll, 1000);
  
  window.addEventListener('scroll', throttledScroll);
  