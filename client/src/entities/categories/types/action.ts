import { Category } from "./categoryType";


export type Action =
  | { type: 'load/categorys'; payload: Category[] }