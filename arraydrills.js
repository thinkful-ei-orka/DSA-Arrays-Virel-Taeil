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
    let i, j = 0;
    let output = [];
    while(i<array1.length && j<array2.length){
        if(array1[i]===undefined){
            output.push(array2[j]);
            j++
        }
        if(array2[j]===undefined){
            output.push(array1[i]);
            i++
        }
        if(array1[i]<array2[j]){
            output.push(array1[i]);
            i++
        }
        else{
            output.push(array2[j]);
            j++
        }
    }
    return output
}

console.log(Merge([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]))
//[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// console.log(Filtering([1,2,3,4,5,6]))
// console.log(maxSum([4, 6, -3, 5, -2, 1]))
