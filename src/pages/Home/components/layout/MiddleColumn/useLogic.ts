import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch } from "../../../../../redux/reducers/productSlice";
import { RootState } from "../../../../../redux/store";

function useLogic() {
  const products = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  return { products };
}

export default useLogic;
