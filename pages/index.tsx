import { HeadComponent } from '@/components/Head';
import HeroSection from '@/components/HeroSection';

import { Poppins } from '@next/font/google';
import { Navbar } from '@/components/Navbar';
import { Layout } from '@/components/Layout';

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
			<Layout>
				<main className='bg-dark-500'>
					<HeroSection />
				</main>
			</Layout
		</>
	);
}
