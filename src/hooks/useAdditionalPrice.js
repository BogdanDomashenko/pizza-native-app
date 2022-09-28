import { useSelector } from "react-redux";

export const useAdditionalPrice = (sizeName, typeName) => {
  const sizes = useSelector((state) => state.properties.sizes);
  const types = useSelector((state) => state.properties.types);

  const sizePrice = sizes.find((size) => size.name === sizeName)?.price || 0;
  const typePrice = types.find((type) => type.name === typeName)?.price || 0;

  return sizePrice + typePrice;
};
