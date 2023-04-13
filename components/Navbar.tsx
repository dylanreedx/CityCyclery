import Button from '@/components/Button';
import Link from 'next/link';
import { FacebookLogo, InstagramLogo, List, X } from 'phosphor-react';
import { useState } from 'react';

export function Navbar() {
	const [navbar, setNavbar] = useState(false);

	const navList = (
		<ul className='flex flex-col sm:flex-row text-light-500 gap-5 sm:gap-4 mr-10'>
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
				<Link href='/events'>Events</Link>
			</li>
		</ul>
	);

	const socialIcons = (
		<ul className='flex flex-row justify-center gap-2 text-light-500'>
			<li>
				<InstagramLogo weight='fill' />
			</li>
			<li>
				<FacebookLogo weight='fill' />
			</li>
		</ul>
	);

	return (
		<header className='p-4 flex-[0.25] fixed top-0 z-50 w-screen'>
			<nav
				className={`${
					navbar ? 'max-h-screen' : 'max-h-16'
				} bg-dark-600/50 p-4 rounded-md max-w-5xl mx-auto backdrop-blur-lg transition-all duration-500 ease-in-out overflow-hidden`}
			>
				<div className='flex flex-row justify-between items-center'>
					<div>Logo</div>
					<div className='sm:hidden text-light-500 text-2xl h-6'>
						<button onClick={() => setNavbar(!navbar)}>
							<span className='sr-only'>Open menu</span>
							{navbar ? <X weight='bold' /> : <List weight='fill' />}
						</button>
					</div>
					<div className='hidden sm:flex flex-row items-center text-xs'>
						{navList}
						<Button variant='primary-sm' href='/contact'>
							Contact
						</Button>
						<div className='ml-5 text-2xl'>{socialIcons}</div>
					</div>
				</div>
				{navbar ? (
					<div className='sm:hidden flex flex-col pt-4'>
						{navList}
						<div className='flex flex-col justify-between gap-4 items-stretch text-center w-full mt-16 text-4xl'>
							{socialIcons}
							<Button variant='primary-sm' href='/contact'>
								Contact
							</Button>
						</div>
					</div>
				) : null}
			</nav>
		</header>
	);
}
