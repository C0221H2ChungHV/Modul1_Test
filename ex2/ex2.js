function tryRemoveFromArray(arr,x) {
  for(let i=0;i<arr.length;i++) {
    if (arr.indexOf(x)===-1) {
      return arr;
    } else {
      let j = arr.indexOf(x);
      let removeArr = arr.splice(j,1);
    }
  }
}
let arrayTest = [1,2,3,4,5,6,1,3];
let x = 9;
document.write(tryRemoveFromArray(arrayTest,x));

