import Link from 'next/link';
import Image from 'next/image';
import { FacebookLogo, InstagramLogo} from 'phosphor-react';
import { companyDetails } from '@/utils/company-details';

export function Footer() {
	return (
		<footer className=' bg-dark-600'>
			<div className='w-full p-4 py-6 lg:py-8'>
				<div className='lg:flex lg:justify-evenly gap-2'>
					<div className='flex flex-row items-center h-1/4 gap-x-4 mb-10'>
						<Link href='/'>
							<Image
							src={companyDetails.logos.logomark.light}
							alt='City Cyclery Logo'
							width={50}
							height={50}
							></Image>
						</Link>
						<span className='text-sm text-light-600'>
							&copy; 2023, All Rights Reserved.
						</span>
					</div>
					<div className='grid grid-cols-3'>
						<div className='text-light-600'>
							<ul className='space-y-3'>
								<li>
									<Link href='/'>Home</Link>
								</li>
								<li>
									<Link href='/about'>About Us</Link>
								</li>
								<li>
									<Link href='/services'>Services</Link>
								</li>
								<li>
									<Link href='/brands'>Brands</Link>
								</li>
								<li>
									<Link href='/contact'>Contact Us</Link>
								</li>
							</ul>
						</div>
						<div className='flex flex-col text-light-500'>
							<h2 className='mb-3 uppercase font-semibold'>Follow Us</h2>
							<ul className='flex flex-row gap-2 text-2xl'>
								<li>
									<Link href={companyDetails.socialMedia.instagram} target='__blank'>
										<InstagramLogo weight='fill' />
									</Link>
								</li>
								<li>
									<Link href={companyDetails.socialMedia.facebook} target='__blank'>
										<FacebookLogo weight='fill' />
									</Link>
								</li>
							</ul>
						</div>
						<div className='flex flex-col gap-4 text-light-500'>
							<h3 className='uppercase font-semibold underline underline-offset-8'>Store Hours</h3>
							<ul className='space-y-1'>
								<li>{companyDetails.hours.open}</li>
								<li>{companyDetails.hours.closed}</li>
							</ul>
							<ul className='space-y-1 text-light-600'>
								<li><a href={'tel: ' + companyDetails.phone} className='hover:text-accent-500'>{companyDetails.phone}</a></li>
								<li>{companyDetails.location.address}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
