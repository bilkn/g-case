import { call, put, takeEvery } from "redux-saga/effects";

import API from "./api";
import { getProducts, setProducts } from "./redux/reducers/productSlice";

function* handleGetProducts(action: any): any {
  try {
    const products = yield call(API.fetchProducts, action.payload);
    console.log({ products });

    yield put(setProducts(products));
  } catch (e) {
    yield put({
      type: "PRODUCT_FETCH_FAILED",
      message: "An error occurred, please try again.",
    });
  }
}

function* watcherProductSaga() {
  yield takeEvery(getProducts.type, handleGetProducts);
}

export default watcherProductSaga;