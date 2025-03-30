function generatePassword(length, useMinuscules, useMajuscules, useNumbers, useSymbols) {
  const minuscules = 'abcdefghijklmnopqrstuvwxyz';
  const majuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  let charset = '';
  if (useMinuscules) charset += minuscules;
  if (useMajuscules) charset += majuscules;
  if (useNumbers) charset += numbers;
  if (useSymbols) charset += symbols;

  if (!charset) return '';

  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
}

module.exports = generatePassword;
