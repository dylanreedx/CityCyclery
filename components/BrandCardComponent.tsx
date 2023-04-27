import Image from 'next/image';
import Button from './Button';

export type BrandProps = {
	title: string;
	image: string;
	url: string;
	description?: string;
};
export function HouseBrandComponent({
	title,
	image,
	url,
	description,
}: BrandProps) {
	return (
		<div className='grid m-auto bg-dark-700 rounded-2xl md:px-10 py-5 flex-1'>
			<div className='relative'>
				<Image
					src={image}
					alt='Brand Image'
					width={300}
					height={300}
					className='my-5 m-auto'
				></Image>
			</div>
			<div className='py-5 px-6 md:px-16'>
				<h2 className='text-3xl font-bold text-light-500'>{title}</h2>
				<p className='text-light-600 py-4'>{description}</p>
			</div>
			<div className='max-w-4xl mx-auto'>
				<Button variant='primary-base' href={url} target='__blank'>
					View Brand
				</Button>
			</div>
		</div>
	);
}
export function DistBrandComponent({ title, image, url }: BrandProps) {
	return (
		<div className='container m-auto bg-dark-700 rounded-2xl p-3 hover:bg-dark-600'>
			<a href={url} target='__blank'>
				<h2 className='text-center text-xl font-medium text-light-500'>
					{title}
				</h2>
			</a>
		</div>
	);
}
