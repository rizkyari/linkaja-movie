import produce from 'immer';
import * as type from "../type/type";

export const initialState = {
    datas:[],
    isLoading: false,
    isSuccess: false,
    isError: false,
};

const rootReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type){
            case type.GET_DATA:
                draft.isLoading = true;
                break;
            case type.GET_DATA_SUCCESS:
                draft.isSuccess = true;
                draft.isLoading = false;
                break;
            case type.GET_DATA_FAILED:
                draft.isError = true;
                draft.isLoading = false;
                break;
            default:
                break;
        }
    })

export default rootReducer;