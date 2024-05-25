/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from "../../ui/Button";
import { useCheckOut } from "./useCheckOut";
// import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkOut, isCheckingOut } = useCheckOut();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkOut(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
