import { FormikProps, useFormik } from "formik";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import API from "../../api";
import { getProducts } from "../../redux/reducers/productSlice";
import { useQuery } from "react-query";

interface FormikType {
  _page: string;
  _limit: number;
  _sort: string;
  _order: string;
  itemType: string;
  brands: string[] | [];
  tags: string[] | [];
}

function useHomeLogic() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false);
  const {
    values: formikValues,
    handleChange: handleFormikChange,
    setFieldValue: setFormikFieldValue,
  }: FormikProps<FormikType> = useFormik<FormikType>({
    initialValues: {
      _page: "1",
      _limit: 16,
      _sort: "price",
      _order: "",
      itemType: "",
      brands: [],
      tags: [],
    },
    onSubmit: () => {
      console.log("submit");
    },
  });

  const toggleFilter = () => setShowFilter(!showFilter);

  const handlePageChange = (e: ChangeEvent, page: number) => {
    setFormikFieldValue("_page", page);
  };

  const { data: { data: brands } = {} } = useQuery("brands", API.fetchBrands, {
    retry: false,
  });

  useEffect(() => {
    const { brands, tags, _sort } = formikValues;
    const queryEntries = Object.entries(formikValues).filter(
      ([key, value]) => !(value instanceof Array) && value && !(key === "_sort")
    );

    const searchParams = new URLSearchParams(queryEntries);

    if (_sort) {
      const [sort, order] = _sort.split("_");
      searchParams.append("_sort", sort);
      order && searchParams.append("_order", order);
    }

    if (brands.length) {
      brands.forEach((brand) => searchParams.append("manufacturer", brand));
    }
    if (tags.length) {
      tags.forEach((tag) => searchParams.append("tags", tag));
    }

    dispatch(getProducts(searchParams));
  }, [dispatch, formikValues]);

  /* 
  useEffect(() => {
    navigate({
      pathname: "/",
      search: `?${params}`,
    });
  }, [formikValues, navigate]); */

  const handlers = {
    toggleFilter,
    handleFormikChange,
    handlePageChange,
  };

  const states = {
    showFilter,
    brands: brands || [],
  };

  return {
    states,
    handlers,
    formikValues,
    brands,
  };
}

export default useHomeLogic;
