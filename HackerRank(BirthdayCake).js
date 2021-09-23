
    // * how to find tallest candles of birthday cake*//

function BirthdayCake(candles) {
  let count = 0;
  let max = candles[0];

  for (let i = 0; i < candles.length; i++) {
    const element = candles[i];
    if (max < element) {
      max = element;
      count = 1;
    } else if (max == element) {
      count++;
    }
    }
    return count;
}

const result = [4, 1, 4,5, 3];
const output = BirthdayCake(result);
console.log(output);