import actionCreatorFactory from "typescript-fsa";
import { ProductCode } from "../../domain/entity/productCode";

const actionCreator = actionCreatorFactory();

const productCodeActions = {
  setProductCode: actionCreator<Partial<ProductCode>>("SET_PRODUCTCODE"),
};

export default productCodeActions;
