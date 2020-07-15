function urlify(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      newString += '%20';
    } else {
      newString += string[i];
    }
  }
  return newString;
}
// console.log(urlify('www.thinkful.com /tauh ida parv een'))

function Filtering(array){
  let list = [];
  for(i=0;i<array.length;i++){
      if(array[i]> 5){
          list.push(array[i])
      }
  }
  return list;
}

function maxSum(array){
  let max;
  let sum;
  let finalmax;
  for(let i=0;i<array.length;i++){
    for(let j=i; j<array.length;j++){
      if(j===i){
        max = array[j];
        sum = array[j];
      } else{
        sum=sum + array[j];
        if(sum>max){
          max = sum;
        }
      }
    }
    if(i===0){
      finalmax = max;
    } else if (max> finalmax){
      finalmax = max;
    }
  }
  return finalmax;
}

function Merge (array1,array2){
  let i = 0;
  let j = 0;
  let output = [];
  while(i < array1.length || j < array2.length){
    if(array1[i] < array2[j] || array2[j] === undefined){
      output.push(array1[i]);
      i++;
    }
    else if (array2[j] !== undefined){
      output.push(array2[j]);
      j++;
    }
  }
  return output;
}

function RemoveChars(string, chars){
  let butchered = '';
  let charFound = false;
  for(let i=0;i<string.length;i++){
    charFound = false;
    for(let j=0;j<chars.length;j++){
      if(string[i]===chars[j]){
        charFound = true;
      }
    }
    if(!charFound){
      butchered += string[i];
    }
  }
  return butchered;
}

function products(array) {
  let output = [];
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i === j) {
        // do nothing
      } else {
        product *= array[j];
      }
    }
    output.push(product);
  }
  return output;
}

function array2D(array) {
  let zeroRows = [];
  let zeroCols = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        zeroRows[i] = true;
        zeroCols[j] = true;
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (zeroRows[i] || zeroCols[j]) {
        array[i][j] = 0;
      }
    }
  }

  return array;
}

function rotation(str1,str2){
  let output = false;
  let matching;
  for(let i=0;i<str1.length;i++){
    for(let j=0;j<str2.length;j++){
      if(str1[i]===str2[j])
    }
  }
}


// console.log(RemoveChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))
// console.log(Merge([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));
// console.log(Filtering([1,2,3,4,5,6]))
// console.log(maxSum([4, 6, -3, 5, -2, 1]))
// console.log(products([1, 3, 9, 4]));
let inputArray = [[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]];
console.log(array2D(inputArray));
