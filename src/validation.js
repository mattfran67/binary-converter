export default function validation(value, type) {
  let message = '';
  let isValid = true;

  if (isNaN(value)) {
    message = 'Por favor digite apenas números!';
    isValid = false;
  } else if (type === 'binary') {
    const pattern = /[2-9]+/;
    if (pattern.test(value)) {
      message = 'Por favor apenas digite 0 e 1 neste campo!';
      isValid = false;
    }
  }

  return [isValid, message];
}