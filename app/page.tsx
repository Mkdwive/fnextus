import { getProducts } from "@/lib/api"
import ProductCard from "./component/UI/ProductCard";
import Link from "next/link";
import Container from "./component/UI/common/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Products",
};

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchparams = (await searchParams);
  const category = searchparams.category as string | undefined;
  const cat = category ?? "";
  const data = await getProducts();
  const prodcuts = data.products || [];
  const filteredProduct = prodcuts.filter((items) => (items?.categories?.toLowerCase().startsWith(cat.toLowerCase())))
  const productList = filteredProduct.length > 0 ? filteredProduct : prodcuts;

  return (
    <section className="py-15">
      <Container>
        {
          cat.length > 0 && filteredProduct.length === 0 ?
            <div className="text-center">
              <h3>No Items Found!</h3>
            </div>
            :
            <>
              <h1 className="text-center mb-8 font-bold text-3xl">Explore Food</h1>
              <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-4">
                {

                  productList.map(({ code, product_name, brands, image_url,_id }) => (
                    
                    <Link href={`/product/${_id}`} key={_id}>
                      <ProductCard
                        className="group bg-white rounded-2xl border border-gray-200 overflow-hidden transition hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                        code={code??""}
                        product_name={product_name || "product name"}
                        brands={brands || ""}
                        image_url={image_url || '/placeholder.jpg'}
                      />
                    </Link>
                  ))

                }
              </div>
            </>
        }

      </Container>
    </section>
  )
}
