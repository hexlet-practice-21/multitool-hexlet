const weightConversion = (value, weight) => {
  const weights = {
    Kilograms: {
      Kilograms: (values) => values,
      Gram: (values) => (+(values * 1000).toFixed(7)),
      Ton: (values) => (+(values / 1000).toFixed(7)),
      Pound: (values) => (+(values * 2.20462).toFixed(7)),
      Ounce: (values) => (+(values * 35.274).toFixed(7)),
    },
    Gram: {
      Kilograms: (values) => (+(values / 1000).toFixed(7)),
      Gram: (values) => values,
      Ton: (values) => (+(values / 1000000).toFixed(7)),
      Pound: (values) => (+(values / 453.6).toFixed(7)),
      Ounce: (values) => (+(values / 28.3495).toFixed(7)),
    },
    Ton: {
      Kilograms: (values) => (+(values * 1000).toFixed(7)),
      Gram: (values) => (+(values * 1000000).toFixed(7)),
      Ton: (values) => values,
      Pound: (values) => (+(values * 2204.62).toFixed(7)),
      Ounce: (values) => (+(values * 35274).toFixed(7)),
    },
    Pound: {
      Kilograms: (values) => (+(values / 2.205).toFixed(7)),
      Gram: (values) => (+(values * 453.592).toFixed(7)),
      Ton: (values) => (+(values / 2205).toFixed(7)),
      Pound: (values) => values,
      Ounce: (values) => (+(values * 16).toFixed(7)),
    },
    Ounce: {
      Kilograms: (values) => (+(values / 35.274).toFixed(7)),
      Gram: (values) => (+(values * 28.3495).toFixed(7)),
      Ton: (values) => (+(values / 35274).toFixed(7)),
      Pound: (values) => (+(values / 16).toFixed(7)),
      Ounce: (values) => values,
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
