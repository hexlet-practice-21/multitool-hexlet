import yaml from 'js-yaml';

const createConverter = (conversionFunction) => (data) => {
  try {
    return conversionFunction(data);
  } catch (error) {
    return null;
  }
};

const jsonToYamlConverter = createConverter(yaml.dump);
const yamlToJsonConverter = createConverter(yaml.load);

export default { jsonToYamlConverter, yamlToJsonConverter, createConverter };
