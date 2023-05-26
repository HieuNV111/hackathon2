let arr = prompt("Nhap vao day so bat ky cach nhau bang dau ", " ").split(",");
// cach 1 :
// function sortDescending(a, b) {
//   return b - a;
// }
// console.log(arr.sort(sortDescending));

// cach 2 :

function sortDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
