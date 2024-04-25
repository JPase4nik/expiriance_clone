function pad(str, char, length, isStart) {
    // Checking whether the length of the string is already greater than or equal to the specified length
    if (str.length >= length) {
      return str;
    }
    // Calculation of the number of characters to be added
    const stringLength = length - str.length;
    const stringToAdd = char.repeat(Math.ceil(stringLength / char.length));
  
    if (isStart) {
      return stringToAdd.slice(0, stringLength) + str;
    } else {
      return str + stringToAdd.slice(0, stringLength);
    }
  }
  console.log({'result': pad('qwerty', 'foo', 20, true), 'result length': pad('qwerty', 'foo', 20, true).length}); // 'foofoofoofoofoqwerty
  console.log(pad('qwerty', 'foo', 20, false)); // 'qwertyfoofoofoofoofo'
  console.log(pad('qwerty', '+', 10, true)); // '+++++qwerty'
  console.log(pad('qwerty', '+', 10, false)); // 'qwerty+++++'
  console.log(pad('q', '+', 5, true)); // '++++q
  console.log(pad('q', '+', 5, false)); // 'q++++
  console.log(pad('qwer', '+', 6, false)); // 'qwer++'
  console.log(pad('qwer', '+', 3, false)); // 'qwer'
