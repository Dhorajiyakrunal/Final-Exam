import { DATAFAILAD, DATASUCESS, GETDATA } from "../Constant";

  const intialstate = {loading: false,error: null,data: null,adddata: null };
  
  const Saga = (state = intialstate, action) => {
        if(action.type == GETDATA){
            return{...state, loading: true }
        }

        if(action.type == DATASUCESS){
            return{ ...state, loading: false, error: action.payload}
        }

        if(action.type == DATAFAILAD)
        {
            return{...state, loading: false, error: action.payload }
        }

    return state;
  };


export default Saga
  