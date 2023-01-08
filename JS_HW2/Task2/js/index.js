
  function getArray() {
    const amount = 9;
    const mainArr = [];
    const arr = [];
    for (let i = 1; i <= amount; i++) {
      arr.push(i);
      if (arr.length % 3 === 0) {
        let arrPush = arr.slice();
        mainArr.push(arrPush);
        arr.length = 0;
      }
    }
    console.log(mainArr);
      }

  getArray();



