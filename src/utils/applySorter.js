export const applySorter = (data, sorter) => {
  if (!sorter?.field || !sorter?.order) return data;

  const { field, order } = sorter;

  return [...data].sort((a, b) => {
    const valA = a?.[field];
    const valB = b?.[field];

    // Handle null / undefined
    if (valA == null && valB == null) return 0;
    if (valA == null) return order === "ascend" ? -1 : 1;
    if (valB == null) return order === "ascend" ? 1 : -1;

    // String sorting
    if (typeof valA === "string" && typeof valB === "string") {
      return order === "ascend"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    // Date sorting
    if (valA instanceof Date || valB instanceof Date) {
      return order === "ascend"
        ? new Date(valA) - new Date(valB)
        : new Date(valB) - new Date(valA);
    }

    // Number sorting
    return order === "ascend"
      ? valA - valB
      : valB - valA;
  });
};
