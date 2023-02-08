function counterF() {
  let res = 0;
  return function (a) {
    res += a;
    return res;
  };
}

const counter = counterF();

console.log(counter(6));
console.log(counter(6)); 
console.log(counter(50));
