import { reducerWithInitialState } from "typescript-fsa-reducers";
import { ProductCode } from "../../domain/entity/productCode";
import productCodeActions from "./actions";

const init: ProductCode = {
  product_code: "",
};

const productCodeReducer = reducerWithInitialState(init)
.case(productCodeActions.setProductCode,(state, payload) => ({
    ...state,
    ...payload
  }));

export default productCodeReducer;
