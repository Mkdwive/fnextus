import { getProductById } from "@/lib/api";
import Container from "@/app/component/UI/common/Container";
import Image from "next/image";
import NutritionItem from "@/app/component/UI/NutritionItem";
import Back from "@/app/component/UI/Back";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  try {
    const {id} = await params;
    const data = await getProductById(id);

    const productName =
      data?.product?.product_name || "Product Detail";
    console.log(productName)
    return {
      title: `${productName} | My Store`,
      description:
        data?.product?.ingredients_text ||
        "View product details, nutrition facts and ingredients.",
    };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    console.log(error);
    return {
      title: "Product Detail | My Store",
    };
  }
}
const ProductDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  let data;

  try {
    data = await getProductById(id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to load product");

  }

  if (!data || data.status === 0 || !data.product) {
    notFound();
  }

  const product = data.product;

  return (
    <section className="py-10">
      <Container>
        <Back label="Back to Product" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center">
            <Image
              src={product.image_url || "/placeholder.jpg"}
              alt={product.product_name || "product"}
              className="max-h-75 object-contain"
              width={800}
              height={400}
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold">
              {product.product_name || "No Name Available"}
            </h1>

            <p className="text-gray-600">
              <span className="font-semibold">Brand:</span>{" "}
              {product.brands || "Unknown"}
            </p>

            <p className="text-gray-500 text-sm">
              <span className="font-semibold">Category:</span>{" "}
              {product.categories || "N/A"}
            </p>

            <p className="text-gray-500 text-sm">
              <span className="font-semibold">Quantity:</span>{" "}
              {product.quantity || "N/A"}
            </p>

            {/* 🧾 Ingredients */}
            {product.ingredients_text && (
              <div>
                <h2 className="font-semibold mt-4 mb-1">Ingredients</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.ingredients_text}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 p-6 rounded-3xl bg-linear-to-r from-orange-50 via-yellow-50 to-red-50">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Nutrition Facts
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <NutritionItem label="Energy" value={product.nutriments?.energy} />
            <NutritionItem label="Fat" value={product.nutriments?.fat} />
            <NutritionItem
              label="Carbs"
              value={product.nutriments?.carbohydrates}
            />
            <NutritionItem label="Sugar" value={product.nutriments?.sugars} />
            <NutritionItem
              label="Protein"
              value={product.nutriments?.proteins}
            />
            <NutritionItem label="Salt" value={product.nutriments?.salt} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetail;