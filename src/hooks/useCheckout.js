import {
  useCheckoutMutation,
  usePhantomCheckoutMutation,
} from "../services/Order.service";
import { ROLES } from "../utils/constants";
import { useUser } from "./useUser";

export const useCheckout = () => {
  const { role } = useUser();

  const phantomCheckout = usePhantomCheckoutMutation();

  const checkout = useCheckoutMutation();

  return role === ROLES.phantom ? phantomCheckout : checkout;
};
