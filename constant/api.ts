export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://world.openfoodfacts.org";

export const API_ENDPOINTS = {
  PRODUCTS: "/products.json",
  PRODUCT_DETAIL: "/api/v0/product",
} as const;

export const API_USD = "https://api.exchangerate-api.com/v4/latest/USD"