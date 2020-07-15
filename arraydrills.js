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


// console.log(Filtering([1,2,3,4,5,6]))
console.log(maxSum([4, 6, -3, 5, -2, 1]))
