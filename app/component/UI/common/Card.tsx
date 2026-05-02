import { ReactNode, FC } from "react"
interface CardProps {
    children?: ReactNode,
    className?: string,
}
const Card: React.FC<CardProps> & {
    Image: FC<CardProps>;
    Body: FC<CardProps>
} = ({ className, children, ...props }) => {
    return (
        <div {...props} className={`rounded-lg  hover:shadow-lg transition h-full ${className}`} >
            {children}
        </div>
    )
}

Card.Image = ({ children, className }) => {
    return (
        <div className={`relative ${className}`}>
            {children}
        </div>
    )
}
Card.Body = ({ children, className }) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    )
}
Card.displayName = "Card";
Card.Image.displayName = "Card.Image";
Card.Body.displayName = "Card.Body";

export default Card