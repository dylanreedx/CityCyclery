import Link from 'next/link';
import { FacebookLogo, InstagramLogo } from 'phosphor-react';

export function Footer() {
	return (
		<footer className=' bg-dark-600'>
			<div className='w-full p-4 py-6 lg:py-8'>
				<div className='md:flex md:justify-evenly'>
					<div className='mb-4 md:mb-0'>
						<Link href='/'>Logo</Link>
						<span className='text-sm text-light-600 ml-2'>
							&copy; 2023 City Cyclery
						</span>
					</div>
					<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 space-x-6'>
						<div className='text-light-600'>
							<ul className='space-y-3'>
								<li className='text-sm'>
									<Link href='/'>Home</Link>
								</li>
								<li className='text-sm'>
									<Link href='/about'>About Us</Link>
								</li>
								<li className='text-sm'>
									<Link href='/services'>Services</Link>
								</li>
								<li className='text-sm'>
									<Link href='/brands'>Brands</Link>
								</li>
								<li className='text-sm'>
									<Link href='/contact'>Contact</Link>
								</li>
							</ul>
						</div>
						<div className='text-light-500'>
							<h2 className='mb-4 uppercase font-semibold'>Follow Us</h2>
							<ul className='flex flex-row gap-2 text-2xl'>
								<li>
									<InstagramLogo weight='fill' />
								</li>
								<li>
									<FacebookLogo weight='fill' />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
