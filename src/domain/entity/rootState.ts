import { StockEndMaterial } from "./stockEndMaterial";
import { ProductCode }  from "./productCode";

export type RootState = {
  stockEndMaterial: StockEndMaterial;
  productCode: ProductCode;
};
