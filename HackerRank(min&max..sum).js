function minMaxSum(array) {
  let min = 0,
    max = 0;

  const newArray = array.sort((a, b) => a - b);

  for (let i = 0; i < 3; i++) {
    min += newArray[i];
  }

  for (let i = 1; i < 4; i++) {
    max += newArray[i];
  }

  console.log(min, max);
}

const value = [1, 3, 8, 9];
minMaxSum(value);
