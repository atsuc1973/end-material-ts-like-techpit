import { reducerWithInitialState } from "typescript-fsa-reducers";
import { StockEndMaterial } from "../../domain/entity/stockEndMaterial";
// import { Material } from "../../domain/entity/material";
import stockEndMaterialActions from "./actions";

const init: StockEndMaterial = {
  material: {gradeColor: ""},
  lotNum: "",
  typeEndMaterial: 0,
  amount: 0

};

const stockEndMaterialReducer = reducerWithInitialState(init)
.case(stockEndMaterialActions.setStockEndMaterial,(state, payload) => ({
    ...state,
    ...payload
  }))
.case(stockEndMaterialActions.setMaterial,(state, payload) => ({
    ...state,
    ...payload
  }))
.case(stockEndMaterialActions.searchMaterial.done, (state, payload) => ({
  ...state,
  material: {...state.material, ...payload.result}
}));

export default stockEndMaterialReducer
