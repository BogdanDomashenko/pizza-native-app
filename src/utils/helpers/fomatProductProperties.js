export const formatProductProperties = (sizeName, typeName) => {
  const hasSize = sizeName !== "none";
  const hasType = typeName !== "none";

  if (!hasSize && !hasType) {
    return "";
  }

  if (hasSize && hasType) {
    return `${sizeName}inch  ${typeName}`;
  }

  if (hasSize && !hasType) {
    return `${sizeName}inch`;
  }

  return typeName;
};
