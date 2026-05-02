import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
interface BackTypes {
    label: string;
    className?: string;
}
const Back = ({ label, className }: BackTypes) => {
    return (
        <Link
            href="/"
            className={`text-sm text-orange-500 hover:underline mb-6 inline-block ${className}`}
        >
           <FaArrowLeftLong className="inline-block me-2"/>{label}
        </Link>
    )
}

export default Back