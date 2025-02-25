function sum(a, b) {
  return a + b;
}

function capitalize(str) {
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}

function calculator(num1, num2) {
  function add() {
    return num1 + num2;
  }
  function divide() {
    return num1 / num2;
  }
  function multiply() {
    return num1 * num2;
  }
  return { add, divide, multiply };
}

function caesarCipher(str) {
  let tempStr = "";
  for (let i = 0; i < str.length; i++) 
    {
    if (
      (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ||
      (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
    ) 
    {
      if (str.charCodeAt(i) + 3 > 90 && str.charCodeAt(i) + 3 < 97) {
        tempStr += String.fromCharCode(str.charCodeAt(i) + 2 - 90 + 65);
      }
      if (str.charCodeAt(i) + 3 > 122) {
        tempStr += String.fromCharCode(str.charCodeAt(i) + 2 - 122 + 97);
      }
      else
      tempStr += String.fromCharCode(str.charCodeAt(i) + 3);
    } else tempStr += str.charAt(i);
  }
  return tempStr;
}

function analyseArray(arr) {
  let average;
  let sum = 0;
  let max;
  let min;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (max === undefined || max === null) max = arr[i];
    else {
      if (max < arr[i]) max = arr[i];
    }
    if (min === undefined || min === null) min = arr[i];
    else {
      if (min > arr[i]) min = arr[i];
    }
  }
  average = sum / arr.length;

  let returnObject = {
    average: average,
    min: min,
    max: max,
    length: arr.length,
  };

  return returnObject.toString();
}


module.exports = { sum, capitalize, calculator, caesarCipher, analyseArray };
