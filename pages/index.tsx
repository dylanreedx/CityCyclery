import HeroSection from '@/components/HeroSection';
import { Poppins } from '@next/font/google';
import { Layout } from '@/components/Layout';
import SectionComponent from '@/components/SectionComponent';
import { brands } from '@/utils/brands-data';
import Image from 'next/image';

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
					style='ml-20 mb-10'
				>
					<div className='horizontal-scroll'>
						{brands.map((brand) => (
							<div
								key={brand.name}
								className='bg-dark-600 h-full relative rounded-md overflow-hidden flex-1 min-w-[300px]'
							>
								<div className='relative w-full h-[10em] rounded-b-xl overflow-hidden'>
									<Image
										src={brand.image}
										fill
										className='object-cover w-full h-full'
										alt={brand.name}
									/>
								</div>
								<div className='p-4'>
									<h3 className='text-light-500 font-medium text-xl'>
										{brand.name}
									</h3>
									<p className='text-light-600 text-sm'>{brand.excerpt}</p>
								</div>
							</div>
						))}
					</div>
				</SectionComponent>
			</Layout>
		</>
	);
}
