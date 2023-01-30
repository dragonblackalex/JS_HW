

// Task №2
class CustomString {
  reverse(str) {
    const resultArr = [];
    for (let i of str) resultArr.unshift(i);
    return resultArr.join("");
  }
  ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  ucWords(str) {
    return str
      .split(" ")
      .map((i) => this.ucFirst(i))
      .join(" ");
  }
}

let myStr = new CustomString();
console.log(myStr.reverse("ytrewq"));
console.log(myStr.ucFirst("qwerty"));
console.log(myStr.ucWords("qwerty qwerty qwerty"));



