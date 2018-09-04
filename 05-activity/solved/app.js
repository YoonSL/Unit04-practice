const numList1 = [1, 4, 5, 6, 2, 3, 1, 7, 6, 8];
const numList2 = [10, 9, 77, 9, 2, 1, 0, 82, 2];
const numList3 = [1, 14, 66, 543, 2, 1, 5, 674];
const numList4 = [9, 6, 3, 2, 1, 6, 7, 8, 8, 7];
const numList5 = [4.2, 5.1, 3, 0, 0, 453, 2.43];

const addArr = function (numList) {
  let sum = 0;

  for (let i = 0; i < numList.length; i++) {
    sum = sum + numList[i];
  }

  return sum;

}


render(addArr(numList1));
render(addArr(numList2));
render(addArr(numList3));
render(addArr(numList4));
render(addArr(numList5));

