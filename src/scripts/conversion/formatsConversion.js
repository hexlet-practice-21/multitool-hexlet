import yaml from 'js-yaml';

const createConverter = (conversionFunction) => (data) => {
  try {
    return conversionFunction(data);
  } catch (error) {
    return null;
  }
};

const formatsConversion = (value, format) => {
  const jsonToYamlConverter = createConverter(yaml.dump);
  const yamlToJsonConverter = createConverter(yaml.load);
  const formats = {
    Json: {
      Json: (values) => values,
      Yaml: (values) => jsonToYamlConverter(values),
    },
    Yaml: {
      Json: (values) => yamlToJsonConverter(values),
      Yaml: (values) => values,
    },
  };
  if (format in formats) {
    const results = {};
    Object.keys(formats[format]).forEach((key) => {
      results[key] = formats[format][key](value);
    });
    return results;
  }
  return null;
};

export default formatsConversion;