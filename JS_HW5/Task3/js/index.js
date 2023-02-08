function time() {
    let last = null;
  
    return function () {
      if (!last) {
        last = Date.now();
        return 'enabled';
      }
      const now = Date.now();
      const timeDifference = Math.round((now - last) / 1000);
      last = now;
      return timeDifference;
    };
  }
  
  const getTime = time();
  
 
  console.log(getTime());
  setTimeout(() => {
    console.log(getTime());
  }, 2000);
  setTimeout(() => {
    console.log(getTime());
  }, 5000);
  setTimeout(() => {
    console.log(getTime());
  }, 12000);
  setTimeout(() => {
    console.log(getTime());
  }, 60000);
  
  



