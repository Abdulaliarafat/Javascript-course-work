// remove  array some duplicate element
// const number = [13,45,65,7,8,13,45,65,7,8]
// const biriany = ['rimon','rohim','akib','rofiq','rimon','rohim','akib','rofiq']

const uniqe = [];
function noDuplicate(arr){
  for(const item of arr){
    //  console.log(item)
    if(uniqe.includes(item) === false){
        uniqe.push(item)
    }
  }
  return uniqe
}
console.log(noDuplicate(['rimon','rohim','akib','rofiq','rimon','rohim','akib','rofiq']))
// console.log(noDuplicate([13,45,65,7,8,13,45,65,7,8]))
