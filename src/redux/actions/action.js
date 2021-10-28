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

export const getDetail = (id) => ({
    type: type.GET_DETAIL,
    id,
});

export const getDetailSuccess = (data) => ({
    type: type.GET_DETAIL_SUCCESS,
    data,
});

export const getDetailFailed = (error) => ({
    type: type.GET_DETAIL_FAILED,
    error,
})
