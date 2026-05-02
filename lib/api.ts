import { API_BASE_URL, API_ENDPOINTS } from "@/constant/api";
import type { ProductListResponse , Product, SingleProduct} from "@/types/product";

export async function getProducts(): Promise<ProductListResponse> {
    console.log(`${API_BASE_URL}${API_ENDPOINTS.PRODUCTS}?action=process&json=1&page=1&page_size=20`)
    try {
        const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PRODUCTS}?action=process&json=1&page=1&page_size=20`, {
          next:{revalidate:60}
        });

        if (!res.ok) {
            throw new Error(`Status: ${res.status}`);
        }
        return res.json();
    }
    catch (err) {
        console.log("getProduct Error", err);
        throw err;
    }


}

export async function getProductById(id: string): Promise<SingleProduct> {
    try {
        const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PRODUCT_DETAIL}/${id}.json`, {
            next:{revalidate:60}
        });

        if (!res.ok) {
            throw new Error("Failed to fetch Product")
        }
        return res.json();
    }
    catch (err) {
        if (err instanceof Error)
            console.log(err.message);
        throw err
    }

}