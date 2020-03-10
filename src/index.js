module.exports = function reverse (n) {
  let arr = []
    let arr1 = Math.abs(n).toString().split("");
  for (let i = arr1.length - 1; i >= 0; i--){
      arr.push(arr1[i])
    
  }
  let number = +arr.join("");
  return number;
}
