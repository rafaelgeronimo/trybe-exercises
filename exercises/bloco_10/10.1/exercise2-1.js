function encode(string) {
  let encoded = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case 'a':
        encoded = encoded.concat('1');
        break;
      case 'e':
        encoded = encoded.concat('2');
        break;
      case 'i':
        encoded = encoded.concat('3');
        break;
      case 'o':
        encoded = encoded.concat('4');
        break;
      case 'u':
        encoded = encoded.concat('5');
        break;
      default:
        encoded = encoded.concat(string[index]);
        break;
    }
  }
  return encoded;
}

function decode(string) {
  let decoded = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case '1':
        decoded = decoded.concat('a');
        break;
      case '2':
        decoded = decoded.concat('e');
        break;
      case '3':
        decoded = decoded.concat('i');
        break;
      case '4':
        decoded = decoded.concat('o');
        break;
      case '5':
        decoded = decoded.concat('u');
        break;
      default:
        decoded = decoded.concat(string[index]);
        break;
    }
  }
  return decoded;
}

const functions = { encode, decode };

module.exports = functions;
