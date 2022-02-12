import { call, put, takeEvery } from "redux-saga/effects";

import API from "./api";
import {
  getProducts,
  getProductsFailed,
  getProductsSuccess,
} from "./redux/reducers/productSlice";

function* handleGetProducts(action: any): any {
  try {
    const products = yield call(API.fetchProducts, action.payload);

    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsFailed({ message: error }));
  }
}

function* watcherProductSaga() {
  yield takeEvery(getProducts.type, handleGetProducts);
}

export default watcherProductSaga;
