function camelCase(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element >= "A" && element <= "Z") {
      count++;
    }
    }

    /*  if "iLoveYouDebarati" = i will do 
    count of total string.than
    count + 1.. otherwise return ( return count ) .
    only use for camelCase word . */

    // return count+1;
    return count;
}

const strings = "iLoveYouDebarati";
const output = camelCase(strings);
console.log(output);
