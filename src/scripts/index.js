import readlineSync from 'readline-sync';

const converting = (speed, value) => {
  switch (value) {
    case 'kilph in mph':
      return (+(speed / 1.609344).toFixed(5));
    case 'kilph in knph':
      return (+(speed / 1.852).toFixed(5));
    case 'mph in kilph':
      return (+(speed * 1.609344).toFixed(5));
    case 'mph in knph':
      return (+(speed / 1.150779).toFixed(5));
    case 'knph in mph':
      return (+(speed * 1.150779).toFixed(5));
    case 'knph in kilph':
      return (+(speed * 1.852).toFixed(5));
    default:
      return (null);
  }
};

const speedConversion = () => {
  const speed = readlineSync.question('Enter the number you want to convert: ');
  const value = readlineSync.question('What do we convert to what? ');
  const convertedSpeed = converting(speed, value);
  return convertedSpeed;
};

export default speedConversion;
