import { GET_TRANSACTIONS } from "../actions/types";

const initialState={
   transactions:[],
}

export default function transactionReducer(state=initialState,action){
    switch(action.type){
        case GET_TRANSACTIONS:
            return{...state,transactions:action.payload};
            
            default:
                return state
    }
}