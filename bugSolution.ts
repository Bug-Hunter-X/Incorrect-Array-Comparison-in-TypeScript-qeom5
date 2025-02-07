function compareArrays(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false; 
  }

  return arr1.every((val, index) => val === arr2[index]);
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 4];
const arr4 = [1, 2, 3, 4];

console.log(compareArrays(arr1, arr2)); // true
console.log(compareArrays(arr1, arr3)); // false
console.log(compareArrays(arr1, arr4));//false