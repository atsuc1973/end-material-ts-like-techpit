import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import endMaterialReducer from "./endMaterial/reducer";
import productCodeReducer from "./productCode/reducer";
import { RootState } from "../domain/entity/rootState";

const store = createStore(
  combineReducers<RootState>({
    endMaterial: endMaterialReducer,
    productCode: productCodeReducer
  }),
  compose(
    applyMiddleware(thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && 
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
  
);

export default store;
