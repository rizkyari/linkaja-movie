import produce from 'immer';
import * as type from "../type/type";

export const initialState = {
    datas:[],
    detail: false,
    isLoading: false,
    isSuccess: false,
    isError: false,
    isDetailLoading: false,
    isDetailSuccess: false,
    isDetailError: false,
};

const rootReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type){
            case type.GET_DATA:
                draft.isLoading = true;
                break;
            case type.GET_DATA_SUCCESS:
                draft.datas = action.data;
                draft.isSuccess = true;
                draft.isLoading = false;
                break;
            case type.GET_DATA_FAILED:
                draft.isError = true;
                draft.isLoading = false;
                break;
            case type.GET_DETAIL:
                draft.isDetailLoading = true;
                break;
            case type.GET_DETAIL_SUCCESS:
                draft.isDetailSuccess = true;
                draft.isDetailLoading = false;
                draft.detail = action.data;
                break;
            case type.GET_DETAIL_FAILED: 
                draft.isDetailError = true;
                draft.isDetailLoading = false;
                break;
            default:
                break;
        }
    })

export default rootReducer;