import { HeadComponent } from '@/components/Head';
import Image from 'next/image';
import Button from '@/components/Button';
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
				<div></div>
			</Layout>
		</>
	);
}
