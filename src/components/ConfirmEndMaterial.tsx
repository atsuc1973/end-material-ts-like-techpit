import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem, TextField, Select, InputLabel } from "@material-ui/core";
import { END_MATERIAL } from "../domain/service/endMaterial";
import useStyles from "./styles";
import { RootState } from "../domain/entity/rootState";
import { EndMaterial } from "../domain/entity/endMaterial";
import endMaterialActions from "../store/endMaterial/actions";

const arrTypeEndMaterials = [
  {id:　0, name: 'バージン'},
  {id: 1, name: '粉砕'},
  {id: 2, name: 'バージン＋粉砕'}
] 

const FormEndMaterial = () => {

  const endMaterial = useSelector((state: RootState) => state.endMaterial); //storeから状態を参照
  const productCode = useSelector((state: RootState) => state.productCode);
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChangeTypeEndMaterial = (member: Partial<EndMaterial>) => {
    dispatch(endMaterialActions.setEndMaterial(member));
  };

  const handleChangeAmount = (member: Partial<EndMaterial>) => {
    dispatch(endMaterialActions.setEndMaterial(member));
  };

  return (
    <>
      <div>原料特定</div>
      <br />
      <TextField 
        fullWidth
        variant="outlined"
        label={END_MATERIAL.PRODUCT_CODE} 
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
        label={END_MATERIAL.MATERIAL} 
        value={endMaterial.material.gradeColor}
        InputProps={{
          readOnly: true,
        }}
      />
      <br />
      <br />
      <InputLabel>{END_MATERIAL.TYPE_END_MATERIAL}</InputLabel>
      <Select
        value={endMaterial.typeEndMaterial}
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
        label={END_MATERIAL.AMOUNT} 
        variant="outlined"
        // inputProps={{disabled: true}}
        value = {endMaterial.amount}
        onChange={e=>
          handleChangeAmount({amount: Number(e.target.value)})
        }
      />
      <div>{endMaterial.amount}</div>
    </>
  )
}

export default FormEndMaterial;
