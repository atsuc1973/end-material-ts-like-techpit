import { reducerWithInitialState } from "typescript-fsa-reducers";
import { EndMaterial } from "../../domain/entity/endMaterial";
// import { Material } from "../../domain/entity/material";
import endMaterialActions from "./actions";

const init: EndMaterial = {
  material: {gradeColor: ""},
  lotNum: "",
  typeEndMaterial: 0,
  amount: 0

};

const endMaterialReducer = reducerWithInitialState(init)
.case(endMaterialActions.setEndMaterial,(state, payload) => ({
    ...state,
    ...payload
  }))
.case(endMaterialActions.setMaterial,(state, payload) => ({
    ...state,
    ...payload
  }))
.case(endMaterialActions.searchMaterial.done, (state, payload) => ({
  ...state,
  material: {...state.material, ...payload.result}
}));

export default endMaterialReducer
