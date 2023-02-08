function convertNumber(number) {
    const minutes = Math.trunc(number / 60).toString();
    const seconds = (number - minutes * 60).toString();
    const minutesString = minutes.length > 1 ? minutes : '0' + minutes;
    const secondsString = seconds.length > 1 ? seconds : '0' + seconds;
    return `${minutesString}:${secondsString}`;
  }
  
  const timer = (time) => {
    let currentTime = time;
    const interval = setInterval(() => {
      if (currentTime !== 0) {
        console.log(convertNumber(currentTime));
        currentTime--;
        if (currentTime === 0) {
          setTimeout(() => {
            console.log('Timer End');
            console.log("Booooom");
            clearInterval(interval);
          }, 1000);
        }
      }
    }, 1000);
  };
  
  timer(5);










