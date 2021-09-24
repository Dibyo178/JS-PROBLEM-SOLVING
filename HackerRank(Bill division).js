function bonAppetit(bill, k, b) {
  let totalBill = 0;

  for (let i = 0; i < bill.length; i++) {
    const element = bill[i];
    if (k != i) {
      totalBill += element;
    }
  }
  let halfBill = totalBill / 2;

  if (b > halfBill) {
    console.log(b - halfBill);
  } else {
    console.log("Bon Appetit");
  }
}

let billArray = [3, 10, 2, 9];

bonAppetit(billArray, 1, 12);
