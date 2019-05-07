/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/

function checkCashRegister(price, cash, cid) {
  let state = {
    change: [],
    status: "CLOSED"
  }
  let changeAmount = cash - price;
   let registerAmount = cid.reduce((total, coin) => total + coin[1], 0);
  if (changeAmount > registerAmount) {
    state.status = "INSUFFICIENT_FUNDS";
  } else if (changeAmount === registerAmount) {
    state.status = "CLOSED";
    state.change.push(...cid);
  }  else {
    let register = cid.map(item => item[1]);
    let values = [0.01, 0.05, 0.1, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
    for (let i = register.length - 1; i >= 0; i--){
      let amount = 0;
      while (changeAmount >= values[i] && register[i] > 0){
        changeAmount = parseFloat(changeAmount - values[i]).toPrecision(5);
        amount += values[i];
        register[i] -= values[i];
      }
      if (amount > 0) {
        state.change.push([cid[i][0], amount]);
      }
      if (changeAmount === 0) {
        break;
      }
    }
    if (changeAmount - 0.000000001 < 0.001) {
      state.status = "OPEN";
    } else {
      state.status = "INSUFFICIENT_FUNDS";
      state.change = [];
    }
  }
  // Here is your change, ma'am.
  return state;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
