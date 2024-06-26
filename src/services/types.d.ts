export type IResponse<T> = Promise<T>;

export interface IBaseResponse<T> {
  /**
   * Fetched base response data.
   */
  data: T;
}

export interface IProductDimensions{
  /**
   * Product dimension weight.
   */
  weight?:number;
}

export interface IProductUnits{
  /**
   * Product dimension unit.
   */
  weight?:string;
}

export interface IProductStatus{
  /**
   * If `true`, the product will be available in the UI.
   */
  active?:boolean;
}

export interface IProductPayload{
  /**
   * Product currency.
   */
  currency?:string;
  /**
   * Product description.
   */
  description?:string;
  /**
   * Product dimensions props.
   */
  dimensions?: IProductDimensions;
  /**
   * Unique product id.
   */
  id?: string;
  /**
   * Product image URL.
   */
  imageUrl?: string;
  /**
   * Product name.
   */
  name?:string;
  /**
   * Product price.
   */
  price?:number;
  /**
   * Product units payload props.
   */
  units?:IProductUnits;

}

export interface ICommonResponse{
  /**
   * API common response.
   */
  products: IProductPayload;
}

