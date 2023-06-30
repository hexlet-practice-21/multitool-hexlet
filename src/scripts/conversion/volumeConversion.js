const volumeConversion = (value, volume) => {
  const volumes = {
    Liters: {
      Liters: (values) => values,
      Milliliters: (values) => (+(values * 1000).toFixed(8)),
      CubicMeter: (values) => (+(values / 1000).toFixed(8)),
    },
    Milliliters: {
      Liters: (values) => (+(values / 1000).toFixed(8)),
      Milliliters: (values) => values,
      CubicMeter: (values) => (+(values / 1000000).toFixed(8)),
    },
    CubicMeter: {
      Liters: (values) => (+(values * 1000).toFixed(8)),
      Milliliters: (values) => (+(values * 1000000).toFixed(8)),
      CubicMeter: (values) => values,
    },
  };
  if (volume in volumes) {
    const results = {};
    Object.keys(volumes[volume]).forEach((key) => {
      results[key] = volumes[volume][key](value);
    });
    return results;
  }
  return null;
};

export default volumeConversion;
