import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem, TextField, Select, InputLabel } from "@material-ui/core";
import { STOCK_END_MATERIAL } from "../domain/service/stockEndMaterial";
import useStyles from "./styles";
import { RootState } from "../domain/entity/rootState";
import { StockEndMaterial } from "../domain/entity/stockEndMaterial";
import stockEndMaterialActions from "../store/stockEndMaterial/actions";

const arrTypeEndMaterials = [
  {id:　0, name: 'バージン'},
  {id: 1, name: '粉砕'},
  {id: 2, name: 'バージン＋粉砕'}
] 

const FormStockEndMaterial = () => {

  const stockEndMaterial = useSelector((state: RootState) => state.stockEndMaterial); //storeから状態を参照
  const productCode = useSelector((state: RootState) => state.productCode);
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChangeTypeEndMaterial = (member: Partial<StockEndMaterial>) => {
    dispatch(stockEndMaterialActions.setStockEndMaterial(member));
  };

  const handleChangeAmount = (member: Partial<StockEndMaterial>) => {
    dispatch(stockEndMaterialActions.setStockEndMaterial(member));
  };

  return (
    <>
      <div>原料特定</div>
      <br />
      <TextField 
        fullWidth
        variant="outlined"
        label={STOCK_END_MATERIAL.PRODUCT_CODE} 
        value={productCode.product_code}
        InputProps={{
          readOnly: true,
        }}
      />
      <br />
      <br />
      <TextField
        fullWidth
        variant="outlined"
        label={STOCK_END_MATERIAL.MATERIAL} 
        value={stockEndMaterial.material.gradeColor}
        InputProps={{
          readOnly: true,
        }}
      />
      <br />
      <br />
      <InputLabel>{STOCK_END_MATERIAL.TYPE_END_MATERIAL}</InputLabel>
      <Select
        value={stockEndMaterial.typeEndMaterial}
        onChange={e=>
          handleChangeTypeEndMaterial({typeEndMaterial: e.target.value as number})
        }
      >
        {arrTypeEndMaterials.map((arrTypeEndMaterial) => (
          <MenuItem
            key={arrTypeEndMaterial.id}
            value={arrTypeEndMaterial.id}
          >
            {arrTypeEndMaterial.name}
          </MenuItem>
        ))}
      </Select>
      <br />
      <br />
      <TextField 
        fullWidth 
        className={classes.formField} 
        label={STOCK_END_MATERIAL.AMOUNT} 
        variant="outlined"
        // inputProps={{disabled: true}}
        value = {stockEndMaterial.amount}
        onChange={e=>
          handleChangeAmount({amount: Number(e.target.value)})
        }
      />
      <div>{stockEndMaterial.amount}</div>
    </>
  )
}

export default FormStockEndMaterial;
