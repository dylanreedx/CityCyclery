import HeroSection from '@/components/HeroSection';
import { Poppins } from '@next/font/google';
import { Layout } from '@/components/Layout';
import SectionComponent from '@/components/SectionComponent';
import { houseBrands } from '@/utils/brands-data';
import Image from 'next/image';
import Button from '@/components/Button';
import { HouseBrandComponent } from '@/components/BrandCardComponent';

// const poppins = Poppins({
//   weight: '400',
//   style: 'normal',
// });

export default function Home() {
	return (
		<>
			<Layout
				title='Home - City Cyclery'
				description='Sales, Service & Repair of Any & All Bicycles - Windsor, ON'
			>
				<HeroSection />
				<SectionComponent
					title='Brands'
					btnText='See All'
					btnAction='/brands'
					style='px-4 md:px-20 lg:px-52 mb-10'
				>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
						{houseBrands.map((brand) => (
							<div
								key={brand.title}
								className='flex flex-row md:flex-col bg-dark-600 h-full rounded-xl md:pb-3'
							>
								<div className='relative hidden md:block min-w-fit min-h-[45%] h-[12em] rounded-xl'>
									<Image
										src={brand.image}
										fill
										className='object-contain my-6 px-10'
										alt={brand.title}
										loading='lazy'
									/>
								</div>
								<div className='p-4 pb-5 md:pb-4 flex flex-col justify-between h-full'>
									<div>
										<h3 className='text-light-500 font-bold text-2xl mb-2'>
											{brand.title}
										</h3>
										<p className='text-light-600 text-sm mb-5 line-clamp-3 sm:line-clamp-4 lg:line-clamp-5'>
											{brand.description}
										</p>
									</div>
									<div>
										<Button
											variant='primary-base'
											href={brand.url}
											target='__blank'
										>
											View Brand
										</Button>
									</div>
								</div>
							</div>
						))}
					</div>
				</SectionComponent>
			</Layout>
		</>
	);
}
