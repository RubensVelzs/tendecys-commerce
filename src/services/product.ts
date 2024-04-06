import instance from "./instance";
import { IBaseResponse, ICommonResponse, IResponse } from "./types";



export const productResources = {
    findAll: (): IResponse<IBaseResponse<ICommonResponse>> => instance.get('/products'),
}