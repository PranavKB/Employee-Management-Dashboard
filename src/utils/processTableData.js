import { applySearch } from "./applySearch";
import { applyFilters } from "./applyFilters";
import { applySorter } from "./applySorter";

export const processTableData = (data, tableState) => {
  let result = data;

  result = applySearch(result, tableState.search);
  result = applyFilters(result, tableState.filters);
  result = applySorter(result, tableState.sorter);

  return result;
};
