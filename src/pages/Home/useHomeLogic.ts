import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/reducers/productSlice";

function useHomeLogic() {
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter(!showFilter);
  const navigate = useNavigate();
  const paginationState = useState({
    _page: "1",
    _limit: "16",
  });
  const dispatch = useDispatch();
  const [paginationQuery] = paginationState;

  const handlers = {
    toggleFilter,
  };

  const states = {
    showFilter,
  };

  console.log(paginationQuery);

  useEffect(() => {
    const paginationParams = Object.entries(paginationQuery).filter(
      ([_, value]) => !!value
    );
    console.log({ paginationParams });

    const searchParams = new URLSearchParams(paginationParams);

    dispatch(getProducts(searchParams));
  }, [dispatch, paginationQuery]);

  useEffect(() => {
    navigate({
      pathname: "/",
      search: `?${createSearchParams({
        _page: paginationQuery._page || "1",
      })}`,
    });
  }, [paginationQuery, navigate]);

  return {
    states,
    handlers,
    paginationState,
  };
}

export default useHomeLogic;
