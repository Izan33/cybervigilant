function generatePassword(length, useMinuscules, useMajuscules, useNumbers, useSymbols) {
  const minuscules = 'abcdefghijklmnopqrstuvwxyz';
  const majuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  let charset = '';
  let passwordArray = [];

  // Ajout obligatoire d'au moins un caractère de chaque type sélectionné
  if (useMinuscules) {
    charset += minuscules;
    passwordArray.push(minuscules[Math.floor(Math.random() * minuscules.length)]);
  }
  if (useMajuscules) {
    charset += majuscules;
    passwordArray.push(majuscules[Math.floor(Math.random() * majuscules.length)]);
  }
  if (useNumbers) {
    charset += numbers;
    passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  if (useSymbols) {
    charset += symbols;
    passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }

  if (!charset) return '';

  // Compléter le reste du mot de passe
  while (passwordArray.length < length) {
    passwordArray.push(charset[Math.floor(Math.random() * charset.length)]);
  }

  // Mélanger le mot de passe (Fisher-Yates Shuffle)
  for (let i = passwordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }

  return passwordArray.join('');
}

module.exports = generatePassword;
