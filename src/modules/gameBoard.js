const playerTableContainer = document.querySelector('#player-table-container');
console.log(playerTableContainer);

const testArr = [];
for (let i = 0; i < 10; i++) {
  let arr = [];
  for (let j = 0; j < 10; j++) {
    arr.push(0);
  }
  testArr.push(arr);
}
console.log(testArr);

export { testArr };
