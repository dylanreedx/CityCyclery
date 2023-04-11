import { HeadComponent } from '@/components/Head';
import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';
import { Poppins } from '@next/font/google';
import { Navbar } from '@/components/Navbar';
import { Layout } from '@/components/Layout';

export default function Services() {
	return (
		<>
			{/* <HeadComponent
				title='Services - City Cyclery'
			/>
			<Layout>
				<div></div>
			</Layout> */}
            <section>
                <h1 className='text-light-500 font-bold text-4xl md:text-6xl z-50 max-w-[20ch]'>
				Services
			    </h1>
                <h2>Builds</h2>
                <h4>Bike Build</h4>
                <p>$100.00</p>
                <p>This is the description of the bike biuld.</p>
            </section>
		</>
	);
}