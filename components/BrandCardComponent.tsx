import Image from "next/image";
import Button from "./Button";

export type BrandProps = {
    title: string;
    image: string;
    url: string;
    description?: string;
}
export function HouseBrandComponent({
    title,
    image,
    url,
    description
}: BrandProps ){
    return (
        <div className="grid m-auto 11/12 bg-dark-700 rounded-2xl">
            <div className="relative">
                <Image
                src={image}
                alt='Brand Image'
                width={800}
                height={800}
                className="h-72 w-full object-cover rounded-t-2xl"
                ></Image>
            </div>
            <div className="py-5 px-16">
                <div className="flex justify-center items-center gap-x-3 my-2">
                    <h2 className="text-3xl font-bold text-light-500">
                        {title}
                    </h2>
                    <Button
                    variant='primary-base'
                    href={url}
                    >View Brand
                    </Button>
                </div>
                <p className='text-light-600 py-4 lg:px-12'>{description}</p>
            </div>
        </div>
    )
}
export function DistBrandComponent({
    title,
    image,
    url
}: BrandProps ){
    return (
        <div className="container m-auto bg-dark-700 rounded-2xl p-3 hover:bg-dark-600">
            <a href={url}>
                <div className="flex flex-row">
                    <div className="object-fit">
                        <Image
                        src={image}
                        alt="Distributor Image"
                        width={50}
                        height={50}
                        ></Image>
                    </div>
                    <div className="ml-4">
                        <h2 className="text-xl font-medium text-light-500">{title}</h2>
                    </div>
                </div>
            </a>
        </div>
    )
}