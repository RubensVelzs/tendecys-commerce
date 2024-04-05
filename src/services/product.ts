import instance from "./instance";
import { IBaseResponse, ICommonResponse, IProductPayload, IResponse } from "./types";



export const productResources = {
    findAll: (): IResponse<IBaseResponse<ICommonResponse>> => instance.get('/products'),
    findById: (id: string): IResponse<IBaseResponse<ICommonResponse>>=> instance.get(`/products/${id}`)
}