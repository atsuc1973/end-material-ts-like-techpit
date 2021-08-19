import actionCreatorFactory from "typescript-fsa";
import { StockEndMaterial } from "../../domain/entity/stockEndMaterial";
import { Material } from "../../domain/entity/material"
import { ProductCode } from "../../domain/entity/productCode";

const actionCreator = actionCreatorFactory();

const stockEndMaterialActions = {
  setStockEndMaterial: actionCreator<Partial<StockEndMaterial>>("SET_STOCK_END_MATERIAL"),
  setProductCode: actionCreator<Partial<ProductCode>>("SET_PRODUCTCODE"),
  setMaterial: actionCreator<Partial<Material>>("SET_MATERIAL"),
  searchMaterial: actionCreator.async<{}, Partial<Material>, {}>("SEARCH_MATERIAL"),
};

export default stockEndMaterialActions;
