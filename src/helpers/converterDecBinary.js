export default function converterDecBinary(num, convert) {
  let bin = '';
  if (convert === 'binary') {
    let dividend = num;
    let result;

    if (num === '0') return 0;

    while (dividend >= 1) {
      bin += dividend % 2;
      dividend = Math.floor(dividend / 2);
    }

    result = bin.split('').reverse().join('');
    return result;
  } else {
    let decimal = 0;
    bin = num.split('').reverse();

    for (let i = 0; i < bin.length; i++) {
      decimal += bin[i] * (2 ** i);
    }

    return decimal;
  }
}