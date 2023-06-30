const weightConversion = (value, weight) => {
  const weights = {
    kilograms: {
      kilograms: (values) => values,
      gram: (values) => (+(values * 1000).toFixed(7)),
      ton: (values) => (+(values / 1000).toFixed(7)),
      pound: (values) => (+(values * 2.20462).toFixed(7)),
      ounce: (values) => (+(values * 35.274).toFixed(7)),
    },
    gram: {
      kilograms: (values) => (+(values / 1000).toFixed(7)),
      gram: (values) => values,
      ton: (values) => (+(values / 1000000).toFixed(7)),
      pound: (values) => (+(values / 453.6).toFixed(7)),
      ounce: (values) => (+(values / 28.3495).toFixed(7)),
    },
    ton: {
      kilograms: (values) => (+(values * 1000).toFixed(7)),
      gram: (values) => (+(values * 1000000).toFixed(7)),
      ton: (values) => values,
      pound: (values) => (+(values * 2204.62).toFixed(7)),
      ounce: (values) => (+(values * 35274).toFixed(7)),
    },
    pound: {
      kilograms: (values) => (+(values / 2.205).toFixed(7)),
      gram: (values) => (+(values * 453.592).toFixed(7)),
      ton: (values) => (+(values / 2205).toFixed(7)),
      pound: (values) => values,
      ounce: (values) => (+(values * 16).toFixed(7)),
    },
    ounce: {
      kilograms: (values) => (+(values / 35.274).toFixed(7)),
      gram: (values) => (+(values * 28.3495).toFixed(7)),
      ton: (values) => (+(values / 35274).toFixed(7)),
      pound: (values) => (+(values / 16).toFixed(7)),
      ounce: (values) => values,
    },
  };
  if (weight in weights) {
    const results = {};
    Object.keys(weights[weight]).forEach((key) => {
      results[key] = weights[weight][key](value);
    });
    return results;
  }
  return null;
};

export default weightConversion;
