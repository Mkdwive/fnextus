// Nutritional data
export interface Nutriments {
  energy?: number;
  fat?: number;
  carbohydrates?: number;
  sugars?: number;
  proteins?: number;
  salt?: number;
}

// Single product
export interface Product {
  _id: string,
  code?: string;

  product_name?: string;
  generic_name?: string;

  brands?: string;
  categories?: string;

  image_url?: string;
  image_small_url?: string;

  quantity?: string;

  ingredients_text?: string;

  nutriments?: Nutriments;
}

// Full API response
export interface ProductListResponse {
  count: number;
  page: number;
  page_size: number;
  products: Product[];
}
export interface SingleProduct {
  code: string,
  product: Product;
  status: number;
  status_verbose: string;

}