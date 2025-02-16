// chir ===> 3 cft
// table ===> 10 cft
// bed === 50 cft
 function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    const parChairWood = 3;
    const parTableWood = 9;
    const parBedWood = 10;

    const chairTotalWood = chairQuantity * parChairWood;
    const tableTotalWood = tableQuantity * parTableWood;
    const bedTotalWood = bedQuantity * parBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood ;
 }
 const wood = woodQuantity(12,4,2)
 console.log('wood needed',wood)

//  shoping 
function clothesShoping(shirtQuantity,pantQuantity,shoeQuantity){
    const shirtPricePer = 1499;
    const pantPricePer = 2599;
    const shoePricePer = 3399;

    const shirtTotalPrice = shirtQuantity * shirtPricePer;
    const pantTotalPrice = pantQuantity * pantPricePer;
    const shoeTotalprice = shoeQuantity * shoePricePer;
    const totalAmount = shirtTotalPrice + pantTotalPrice + shoeTotalprice;
    return totalAmount;
}
const costshoing = clothesShoping(3,4,2)
console.log('Eid shoping', costshoing)