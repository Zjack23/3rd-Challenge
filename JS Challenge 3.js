function generatePassword() {
  let length = parseInt(prompt('Enter the length of the password (between 8 and 128 characters)'));

  if (length < 8 || length > 128 || isNaN(length)) {
    alert('Please enter a valid number between 8 and 128.');
    return;
  }

  let includeLowercase = confirm('Include lowercase characters?');
  let includeUppercase = confirm('Include uppercase characters?');
  let includeNumeric = confirm('Include numeric characters?');
  let includeSpecial = confirm('Include special characters?');

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert('Please select at least one character type.');
    return;
  }

  let password = generatePasswordBasedOnCriteria(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

  document.getElementById('password').value = password;
}

document.getElementById('generatePasswordButton').addEventListener('click', generatePassword);

function generatePasswordBasedOnCriteria(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  let charset = '';
  let password = '';

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeric = '0123456789';
  const special = '!@#$%^&*()_+[]{}|;:,.<>?';

  if (includeLowercase) charset += lowercase;
  if (includeUppercase) charset += uppercase;
  if (includeNumeric) charset += numeric;
  if (includeSpecial) charset += special;

  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
}
