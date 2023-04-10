import { HeadComponent } from '@/components/Head';
import HeroSection from '@/components/HeroSection';

import { Poppins } from '@next/font/google';

// const poppins = Poppins({
//   weight: '400',
//   style: 'normal',
// });

export default function Home() {
	return (
		<>
			<HeadComponent
				title='Home - City Cyclery'
				description='Sales, Service & Repair of Any & All Bicycles - Windsor, ON'
			/>
			<main className='bg-dark-500'>
				<HeroSection />
			</main>
		</>
	);
}
