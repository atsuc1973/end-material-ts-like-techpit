import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button } from "@material-ui/core";

import useStyles from "./styles";
import { RootState } from "../domain/entity/rootState";

import { Material } from "../domain/entity/material"
import { END_MATERIAL } from "../domain/service/endMaterial";
import endMaterialActions from "../store/endMaterial/actions";
import productCodeActions from "../store/productCode/actions";

// import { isProductCode } from "../domain/service/productCode";

import { searchMaterialProductCode } from "../store/endMaterial/effects";

const ProductMaterial = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.4.246/Apiproducts/productcodes/api.json")
      .then((response) => response.json())
      .then((data) => setData(data.arrProducts))
  },[]);
 
  const dispatch = useDispatch();
  const endMaterial = useSelector((state: RootState) => state.endMaterial); //storeから状態を参照
  const productCode = useSelector((state: RootState) => state.productCode);
  const classes = useStyles();

  const handleChange 
  = (member: Partial<Material>) => {
    dispatch(endMaterialActions.setMaterial(member));
  };

  const handleProductCodeChange = (code: string) => {
    // if(!isProductCode(code)) return;
    dispatch(productCodeActions.setProductCode({product_code: code}));
    dispatch(searchMaterialProductCode(code));
  };

  return (
    <>
      原料特定
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={data.map((option: any) => option.product_code)}
        value = {productCode.product_code}
        onChange={(event, value)=>handleProductCodeChange(value)}
        renderInput={(params) => (
          <TextField {...params} label={END_MATERIAL.PRODUCT_CODE}  margin="normal" variant="outlined" />
        )}

      />
      <TextField 
        fullWidth 
        className={classes.formField} 
        label={END_MATERIAL.MATERIAL} 
        variant="outlined"
        inputProps={{disabled: true}}
        value = {endMaterial.material.gradeColor}
        onChange={e=>handleChange({gradeColor: e.target.value})}
      />
      <div>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/formEndMaterial"
        >
          フォームページへ
        </Button>
      </div>
      <div>{productCode.product_code}</div>
      <div>{endMaterial.material.gradeColor}</div> 
    </>
  )
}

export default ProductMaterial;
