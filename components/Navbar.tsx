import Button from '@/components/Button';
import Link from 'next/link';
import { FacebookLogo, InstagramLogo } from 'phosphor-react';

export function Navbar() {
	return (
		<header className='p-4'>
			<nav className='bg-dark-600 flex flex-row items-center justify-between p-4 rounded-md max-w-5xl mx-auto'>
				<div>Logo</div>
				<div className='flex flex-row items-center'>
					<ul className='flex flex-row text-light-500 gap-4 mr-10 text-xs'>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/services'>Services</Link>
						</li>
						<li>
							<Link href='/brands'>Brands</Link>
						</li>
					</ul>
					<Button variant='primary-sm' href='/contact'>
						Contact
					</Button>
					<ul className='flex flex-row gap-2 text-light-500 ml-5'>
						<li>
							<InstagramLogo weight='fill' />
						</li>
						<li>
							<FacebookLogo weight='fill' />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
