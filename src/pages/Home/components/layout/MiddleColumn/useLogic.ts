import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";

function useLogic(params: any) {
  const products = useSelector((state: RootState) => state.product);
  const { setPaginationQuery } = params;

  const handlePageChange = (e: any, page: number) => {
    setPaginationQuery((state: any) => ({ ...state, _page: page }));
  };

  const handlers = {
    handlePageChange,
  };

  return { products, handlers };
}

export default useLogic;
