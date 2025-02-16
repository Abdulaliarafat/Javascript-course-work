// first 100 ==> 100 taka regular price
// 101 to 200 ===> 90 taka
// above 200 ===70 taka
function layerDiscountTotal(quntity){
    const first100rice = 100;
    const second100price = 90;
    const above200price = 70;
    if(quntity <= 100){
        const total = quntity * first100rice;
        return total
    }
    else if(quntity <= 200){
        const first100Total = 100 * first100rice;
        const remainngQuantity = quntity - 100;
        const remainngTotal = remainngQuantity * second100price;
        const total = first100Total +remainngTotal;
        return total
    }
    else{
        const first100Total = 100 * first100rice;
        const second100Total = 100 * second100price;
        const remainngQuantity = quntity - 200;
        const remainngTotal = remainngQuantity * above200price;
        const total = first100Total + second100Total + remainngTotal;
        return total;
    }
}
const discount = layerDiscountTotal(150)
console.log(discount)