
function withArr() {
  let res = [];
  return function () {
    if (arguments.length > 0) {
      res.push(...arguments);
      return res;
    }
    res = [];
    return res;
  };
}

const getUpdatedArr = withArr();

console.log(getUpdatedArr(7));
console.log(getUpdatedArr(2));
console.log(getUpdatedArr({ cat: 'British' })); 
console.log(getUpdatedArr());
console.log(getUpdatedArr(6));



