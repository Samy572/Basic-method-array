// BASIC METHOD ARRAY

const arr = [1, 2, 3, 4, 5];

const double = arr.map((el) => el * 2);

const even = arr.filter((el) => el % 2 === 0);

const odd = arr.filter((el) => el % 2 !== 0);

const maxValue = Math.max(...arr);

const minValue = Math.min(...arr);

const sum = arr.reduce((el, acc) => (el += acc));

const moyenne = arr.reduce((el, acc) => (el += acc)) / arr.length;
