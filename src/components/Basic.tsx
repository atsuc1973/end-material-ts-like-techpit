import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@material-ui/core";

import useStyles from "./styles";
import { RootState } from "../domain/entity/rootState";
import { StockEndMaterial } from "../domain/entity/stockEndMaterial";
import { ProductCode } from "../domain/entity/productCode";
import { Material } from "../domain/entity/material"
import { STOCK_END_MATERIAL } from "../domain/service/stockEndMaterial";
import stockEndMaterialActions from "../store/stockEndMaterial/actions";
import productCodeActions from "../store/productCode/actions";

// import { isProductCode } from "../domain/service/productCode";
import { searchMaterialProductCode } from "../store/stockEndMaterial/effects";

const Basic = () => {
  const dispatch = useDispatch();
  const stockEndMaterial = useSelector((state: RootState) => state.stockEndMaterial); //storeから状態を参照
  const productCode = useSelector((state: RootState) => state.productCode);
  const classes = useStyles();

  const handleChange = (member: Partial<Material>) => {
    dispatch(stockEndMaterialActions.setMaterial(member));
  };

  const handleProductCodeChange = (code: string) => {
    // if(!isProductCode(code)) return;
    dispatch(productCodeActions.setProductCode({product_code: code}));
    dispatch(searchMaterialProductCode(code));
  };

  return (
    <>
      <TextField 
        fullWidth 
        className={classes.formField} 
        label={STOCK_END_MATERIAL.PRODUCT_CODE} 
        value = {productCode.product_code}
        onChange={e=>handleProductCodeChange(e.target.value)}
      />
      <TextField 
        fullWidth 
        className={classes.formField} 
        label={STOCK_END_MATERIAL.MATERIAL} 
        value = {stockEndMaterial.material.gradeColor}
        onChange={e=>handleChange({gradeColor: e.target.value})}
      />
      <div>{stockEndMaterial.material.gradeColor}</div>
    </>
  )
}

export default Basic;
