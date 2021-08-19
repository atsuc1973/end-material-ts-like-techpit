import { Material } from "./material";
// import { TypeEndMaterial } from "./typeEndMaterial";

export type StockEndMaterial = {
  material: Material;
  lotNum: string;
  typeEndMaterial: number;
  amount: number
}
