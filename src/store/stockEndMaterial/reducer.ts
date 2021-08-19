import { reducerWithInitialState } from "typescript-fsa-reducers";
import { StockEndMaterial } from "../../domain/entity/stockEndMaterial";
// import { Material } from "../../domain/entity/material";
import stockEndMaterialActions from "./actions";

const init: StockEndMaterial = {
  material: {gradeColor: ""},
  // material: "",
  lotNum: "",
  // productCode: {
  //   product_code: "",
  //   product_name: "",
  //   material: {
  //     gradeColor: ""
  //   }
  // },
  typeEndMaterial: 0,
  // typeEndMaterial: {
  //   id: 0,
  //   name: ""
  // },
  amount: 0

};

const stockEndMaterialReducer = reducerWithInitialState(init)
.case(stockEndMaterialActions.setStockEndMaterial,(state, payload) => ({
    ...state,
    ...payload
  }))
.case(stockEndMaterialActions.searchMaterial.done, (state, payload) => ({
  ...state,
  material: {...state.material, ...payload.result}
}));

export default stockEndMaterialReducer
