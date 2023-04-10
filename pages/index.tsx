import { HeadComponent } from '@/components/Head';
import Image from 'next/image';
import Button from '@/components/Button';
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
				<section>
					<h1>Sales, Service & Repair of Any & All Bicycles</h1>
					<p>Proudly serving Windsor & Essex County</p>
					<div>
						<Button variant='primary' href='/contact'>
							Contact
						</Button>
						<Button variant='secondary' href='/services'>
							Contact
						</Button>
					</div>
				</section>
			</main>
		</>
	);
}
