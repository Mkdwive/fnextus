import Image from "next/image";
import Card from "../common/Card";
import { ProductProps } from "./type";

export default function ProductCard({
    className,
    product_name,
    brands,
    image_url
}: ProductProps) {
    console.log(image_url);
    return (
        <Card className={className}>
            <Card.Image className="pt-4">
                <Image
                    className="w-full h-40 object-contain"
                    src={`${image_url}`}
                    height={200} width={300}
                    alt={product_name || "image"}
                />
            </Card.Image>
            <Card.Body className="p-4">
                <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {product_name}
                </h2>
                <p className="mt-2 text-xs text-gray-500">{brands}</p>
            </Card.Body>
        </Card>

    )
}