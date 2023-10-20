const shuffle = require("../src/shuffle");

let arr = [4,2,1,3,5,6]

describe("shuffle should ..", () => {
  // CODE HERE
  test('shuffle should be an array', () => {
    let result = shuffle(arr)
    expect( typeof result).toBe("object")

    console.log(result)
  });
  
  test('array should be the same length as argument passed in', () => {
    expect(arr).toHaveLength(6)
  })
});
