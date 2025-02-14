function add(price1, price2){
    const total = price1 + price2;
    return total
}
const bill = add(5, 80)

function add2(price1,price2){
      return price1 + price2;
}
const bill2 = add2(10,40)
console.log(bill,'|',bill2);


function somemath(num1,num2){
    const sum = num1 + num2;
    const sub = num1 -num2;
    const multiply = sum * sub;
    const result = multiply / 2;
    return result;
}
const domath = somemath(10,5)
console.log(domath)