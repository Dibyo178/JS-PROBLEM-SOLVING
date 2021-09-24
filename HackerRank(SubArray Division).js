function subArray(s, m, d) {
    let count=0;
     for (let i = 0; i < s.length; i++) {
        //  const element = subArray[i];
         let sum = 0;
       
         for (let j = i; j <i+m; j++) {
             sum += s[j];
         }

         if (sum == d) {
             count++;

         }
         
    }
    
    return count;
}

let string = [2, 2, 1, 3, 2], month = 2, date = 4;

const result = subArray(string, month, date);
console.log(result);