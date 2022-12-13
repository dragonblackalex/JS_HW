let number=10;
for (let i = 1; i < number; i++) {
  const fizz = "Fiz";
  const buzz = "Buz";
  let a = i % 2;
  let b = i % 3;
  if (a === 0) {
    console.log(fizz)
  } else if (b === 0) {
    console.log(fizz + buzz)
  } else if (a != 0) {
    console.log(buzz)
  }
}

