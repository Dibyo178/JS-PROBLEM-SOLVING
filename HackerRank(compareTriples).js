function compareTriples(a, b) {
  let alice = 0,
    bob = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
  }
  return [alice, bob];
}

const aliceCount = [5, 6, 7],
  bobCount = [3, 6, 10];
const output = compareTriples(aliceCount, bobCount);
console.log(output);
