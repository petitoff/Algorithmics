const reverse = function (x) {
  let str = x.toString();

  str = str.split('');
  if (str[0] == '-') {
    str = str.reverse().slice(0, str.length - 1);
    str.unshift('-');
    str = +str.join('');
  } else {
    str = +str.reverse().join('');
  }

  if (str > 2147483647 || str < -2147483647) return 0;
  else return str;
};

console.log(reverse(-123));
