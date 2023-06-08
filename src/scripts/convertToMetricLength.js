const convertToMetricLength = (value, unit) => {
  const units = {
    Kilometer: {
      Kilometer: (val) => val,
      Meter: (val) => val * 1000,
      Centimeter: (val) => val * 100000,
      Millimeter: (val) => val * 1000000,
    },
    Meter: {
      Kilometer: (val) => val / 1000,
      Meter: (val) => val,
      Centimeter: (val) => val * 100,
      Millimeter: (val) => val * 1000,
    },
    Centimeter: {
      Kilometer: (val) => val / 100000,
      Meter: (val) => val / 100,
      Centimeter: (val) => val,
      Millimeter: (val) => val * 10,
    },
    Millimeter: {
      Kilometer: (val) => val / 1000000,
      Meter: (val) => val / 1000,
      Centimeter: (val) => val / 10,
      Millimeter: (val) => val,
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

export default convertToMetricLength;
