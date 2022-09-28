import { useCart } from "../../../hooks";
import { Wrapper } from "../../../ui";
import { CartItem } from "./CartItem/CartItem";

export const CartItems = () => {
  const { items } = useCart();

  console.log(items);

  return (
    <Wrapper>
      {items.length
        ? items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              product={item.product}
              selectedProps={item.selectedProps}
            />
          ))
        : ""}
    </Wrapper>
  );
};
