import HeroSection from '@/components/HeroSection';
import { Poppins } from '@next/font/google';
import { Layout } from '@/components/Layout';
import SectionComponent from '@/components/SectionComponent';
import { houseBrands } from '@/utils/brands-data';
import Image from 'next/image';
import Button from '@/components/Button';

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
					style='px-20 mb-10'
				>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
						{houseBrands.map((brand) => (
							<div
								key={brand.title}
								className='bg-dark-600 h-full rounded-xl overflow-hidden pb-3'
							>
								<div className='relative w-full h-[10em] rounded-xl overflow-hidden'>
									<Image
										src={brand.image}
										fill
										className='object-cover w-full h-full'
										alt={brand.title}
									/>
								</div>
								<div className='p-4'>
									<h3 className='text-light-500 font-bold text-2xl mb-2'>
										{brand.title}
									</h3>
									<p className='text-light-600 text-sm mb-5 line-clamp-5'>
										{brand.description}
									</p>
									<Button variant='primary-base' href='/contact'>
										Contact Us
									</Button>
								</div>
							</div>
						))}
					</div>
				</SectionComponent>
			</Layout>
		</>
	);
}
