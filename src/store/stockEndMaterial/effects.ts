import { Dispatch } from "redux";
import stockEndMaterialActions from "./actions";
import { Material } from "../../domain/entity/material";

import {
  // isProductCode,
} from "../../domain/service/productCode";

export const searchMaterialProductCode = (code: string) => async (
  dispach: Dispatch
) => {
  // if (!isProductCode(code)) return;
  const result = await fetch(
    `http://192.168.4.246/Apiproducts/gradecolor/api/${code}.json`
  ).then(res => res.json());
  console.log(result)
  const material: Partial<Material> = {
    // gradeColor: 'ABCD' ここの処理で代入
    gradeColor: result.grade_color
    
  };

  dispach(stockEndMaterialActions.searchMaterial.done({ result: material, params: {} }));
};
