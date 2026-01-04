export const applyFilters = (data, filters = {}) => {
  let result = [...data];

  Object.entries(filters).forEach(([key, values]) => {
    if (Array.isArray(values) && values.length) {
      result = result.filter(item => values.includes(item[key]));
    }
  });

  return result;
};
