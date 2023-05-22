import { DATAFAILAD, DATASUCESS, GETDATA } from "../Constant";
  

  export const getData = (getdata) => ({
    type: GETDATA,
    payload : getdata,
  });
  
  export const datasucess = (datas) => ({
    type: DATASUCESS,
    payload: datas,
  });
  
  export const datafailad = (failad) => ({
    type: DATAFAILAD,
    payload: failad,
  });
  
  
  