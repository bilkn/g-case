import { useSelector } from "react-redux";
import { Cart } from "../..";
import { RootState } from "../../../../../redux/store";

function RightColumn() {
  const total = useSelector((state: RootState) => state.cart.total);
  return <Cart total={total} />;
}

export default RightColumn;
