type CardProps = {
    title: string;
    price?: number;
    description: string;
}
export default function CardComponent({
    title,
    price,
    description
}: CardProps) {
    return(
        <div className='max-w-sm overflow-hidden mb-4'>
            <h2 className='font-medium text-2xl text-accent-500'>{title}</h2>
            <span className='font-medium text-base text-light-500'>${price?.toFixed(2)}</span>
            <p className='text-base text-light-600 mt-1'>{description}</p>
        </div>
    )
}