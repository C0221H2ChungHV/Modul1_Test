let arrayScore = [6,7,8,9 ];
function findMaxvalue(arr) {
  let max = arr[0];
  for (let i=1;i<arr.length;i++){
    if (arr[i]>max){
      max = arr[i];
    }
  } return max;
}
let maxvalue = findMaxvalue(arrayScore);
document.write("diem so cao nhat la: " +maxvalue);
