export const applySearch = (data, search = {}) => {
  let result = [...data];

  if (search.name) {
    const keyword = search.name.toLowerCase();
    result = result.filter(item =>
      item.fullName?.toLowerCase().includes(keyword)
    );
  }

  return result;
};
