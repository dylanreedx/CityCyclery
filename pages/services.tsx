import { HeadComponent } from '@/components/Head';
import Image from 'next/image';
import Button from '@/components/Button';
import { Poppins } from '@next/font/google';
import { Navbar } from '@/components/Navbar';
import { Layout } from '@/components/Layout';

export default function Services() {
	return (
		<>
			<HeadComponent
				title='Services - City Cyclery'
			/>
			<Layout>
				<div></div>
			</Layout>
		</>
	);
}