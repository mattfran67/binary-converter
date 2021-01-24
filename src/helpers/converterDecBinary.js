export default function converterDecBinary(num, convert) {
  let bin = '';
  if (convert === 'binary') {
    let dividendo = num;
    let result;

    if (num === '0') return 0;

    while (dividendo >= 1) {
      bin += dividendo % 2;
      dividendo = Math.floor(dividendo / 2);
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