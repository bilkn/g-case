import { EventHandler, MouseEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useQuery } from "../../../../../hooks";
import { getProducts } from "../../../../../redux/reducers/productSlice";
import { RootState } from "../../../../../redux/store";

function useLogic() {
  const products = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState({
    _page: "1",
    _limit: "16",
  });

  const handlePageChange = (e: any) => {
    const page = e.target.textContent;
    const searchParams = new URLSearchParams();
    console.log(page, "page");

    searchParams.set("_page", page);

    navigate({
      pathname: "/",
      search: `?${createSearchParams({
        _page: page || "1",
        _limit: "16",
      })}`,
    });
  };

  console.log("params", searchParams);

  const handlers = {
    handlePageChange,
  };

  useEffect(() => {
    dispatch(getProducts({ query: { ...searchParams } }));
  }, [searchParams]);

  return { products, handlers };
}

export default useLogic;
