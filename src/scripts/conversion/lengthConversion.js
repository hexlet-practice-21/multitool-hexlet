const lengthConversion = (value, unit) => {
  const units = {
    Kilometers: {
      Kilometers: (val) => val,
      Meters: (val) => val * 1000,
      Centimeters: (val) => val * 100000,
      Millimeters: (val) => val * 1000000,
    },
    Meters: {
      Kilometers: (val) => val / 1000,
      Meters: (val) => val,
      Centimeters: (val) => val * 100,
      Millimeters: (val) => val * 1000,
    },
    Centimeters: {
      Kilometers: (val) => val / 100000,
      Meters: (val) => val / 100,
      Centimeters: (val) => val,
      Millimeters: (val) => val * 10,
    },
    Millimeters: {
      Kilometers: (val) => val / 1000000,
      Meters: (val) => val / 1000,
      Centimeters: (val) => val / 10,
      Millimeters: (val) => val,
    },
  };
  if (unit in units) {
    const result = {};
    Object.keys(units[unit]).forEach((key) => {
      result[key] = units[unit][key](value);
    });
    return result;
  }
  return null;
};

export default lengthConversion;
