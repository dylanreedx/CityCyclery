import HeroSection from '@/components/HeroSection';
import { Poppins } from '@next/font/google';
import { Layout } from '@/components/Layout';

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
			</Layout>
		</>
	);
}
