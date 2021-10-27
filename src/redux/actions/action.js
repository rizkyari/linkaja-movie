import * as type from "../type/type";

export const getData = () => ({
    type: type.GET_DATA,
})

export const getDataSuccess = (data) => ({
    type: type.GET_DATA_SUCCESS,
    data,
})

export const getDataFailed = (error) =>({
    type: type.GET_DATA_FAILED,
    error,
});

