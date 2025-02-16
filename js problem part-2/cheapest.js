const mobile =[
    {name:'sumsung',price:20000,camera:'12mp',color:'balck'},
    {name:'Oppo',price:12000,camera:'12mp',color:'balck'},
    {name:'1+',price:30000,camera:'12mp',color:'white'},
    {name:'panasonic',price:10000,camera:'12mp',color:'balck'},
    {name:'iphone',price:120000,camera:'12mp',color:'red'},
    {name:'semponye',price:9000,camera:'12mp',color:'blue'},
]
function getChipestPhone(phones){
    // let min = phones[0]
    let max = phones[0]
    for(const phone of phones){
    //   if(phone.price < min.price){
    //     min = phone
    //   }
    if(phone.price > max.price){
        max = phone
    }
    }
    return max;
    // return min;
}
// const cheap = getChipestPhone(mobile)
const height = getChipestPhone(mobile)
// console.log('chipest phone is', cheap)
console.log('hight pricr phone is', height)