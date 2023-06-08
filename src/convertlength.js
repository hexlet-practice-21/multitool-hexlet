const convertToMetricLength = (value, unit) => {
  const units = {
    km: {
      kilometers: (val) => val,
      meters: (val) => val * 1000,
      centimeters: (val) => val * 100000,
      millimeters: (val) => val * 1000000,
    },
    m: {
      kilometers: (val) => val / 1000,
      meters: (val) => val,
      centimeters: (val) => val * 100,
      millimeters: (val) => val * 1000,
    },
    cm: {
      kilometers: (val) => val / 100000,
      meters: (val) => val / 100,
      centimeters: (val) => val,
      millimeters: (val) => val * 10,
    },
    mm: {
      kilometers: (val) => val / 1000000,
      meters: (val) => val / 1000,
      centimeters: (val) => val / 10,
      millimeters: (val) => val,
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
