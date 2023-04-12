export type CardProps = {
    title: string;
    price?: number;
    description?: string;
};
export default function CardComponent({
    title,
    price,
    description
}: CardProps) {
    return(
        <div className='container max-w-sm mb-4'>
            <h2 className='font-bold text-2xl text-accent-500'>{title}</h2>
            <span className='font-medium text-lg text-light-500'>{price ? '$': ''}{price?.toFixed(2)}</span>
            <div className='text-base text-light-600 mt-2 whitespace-normal'>{description}</div>
        </div>
    )
};