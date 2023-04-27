import { Layout } from '@/components/Layout';
import { CalendarCheck, Chat, House } from 'phosphor-react';
import { companyDetails } from '@/utils/company-details';
import Map from '@/components/MapsComponent';

type InputProps = {
	name: string;
	id: string;
	label: string;
	input: JSX.Element;
};

function Input({ name, id, label, input }: InputProps) {
	return (
		<div>
			<label htmlFor={name} id={id} className='text-light-600'>
				{label}
			</label>
			{input}
		</div>
	);
}

export default function Contact() {
	return (
		<Layout title='Contact - City Cyclery'>
			<div className='mt-32 min-h-[50vh] bg-dark-500'>
				<Map />
			</div>
			<div className='absolute inset-0 w-full h-1/2 mt-auto bg-gradient-to-t from-dark-500 to-transparent pointer-events-none' />
			<section className='grid place-items-center text-light-500 -translate-y-36'>
				<div className='bg-dark-600 py-12 px-20 rounded-xl shadow-md'>
					<div className='pb-12'>
						<div className='flex flex-row gap-3 items-baseline'>
							<h1 className='font-medium text-3xl mb-3'>Contact Us</h1>
							<Chat size={30} />
						</div>
						<p className='text-light-600 max-w-[35ch]'>
							Inquire about anything regarding services, tune-ups, and builds!
						</p>
					</div>
					<form
						action='https://formspree.io/f/xgebpzvp'
						method='POST'
						className='flex flex-col gap-2'
					>
						<Input
							name='inquiry'
							id='inquiry'
							label='What is the inquiry regarding?'
							input={
								<select
									name='inquiry'
									id='inquiry'
									className='bg-dark-500 border-0 outline-0 text-light-600 py-2 px-4 rounded-md cursor-pointer w-full text-sm'
								>
									<option value=''>Select Best Fit</option>
									<option value='services'>Services</option>
									<option value='brands'>Brands</option>
									<option value='business'>Business</option>
									<option value='social'>Social</option>
									<option value='general'>General</option>
								</select>
							}
						/>
						<Input
							name='name'
							id='name'
							label='Name'
							input={
								<input
									type='text'
									name='name'
									id='name'
									placeholder='Name'
									className='bg-dark-500 border-0 outline-0 text-light-500 py-2 px-4 rounded-md w-full text-sm'
								/>
							}
						/>
						<Input
							name='email'
							id='email'
							label='Email'
							input={
								<input
									type='email'
									name='email'
									id='email'
									placeholder='Email'
									className='bg-dark-500 border-0 outline-0 text-light-500 py-2 px-4 rounded-md w-full text-sm'
								/>
							}
						/>
						<Input
							name='message'
							id='message'
							label='Message'
							input={
								<textarea
									name='message'
									id='message'
									rows={5}
									className='bg-dark-500 border-0 outline-0 text-light-500 py-2 px-4 rounded-md w-full text-sm'
								></textarea>
							}
						/>
						<button className='w-full border-none outline-0 bg-accent-500 rounded-md py-4 text-dark-500 font-bold'>
							Send
						</button>
					</form>
				</div>
				<div className='flex flex-col py-10 px-24 mt-6 text-light-500 bg-dark-600 rounded-xl text-center'>
					<House size={40} className='mx-auto mb-4' />
					<ul className='space-y-2 text-xl'>
						<li><a href={'tel: ' + companyDetails.phone} className='hover:text-accent-500'>{companyDetails.phone}</a></li>
						<li>{companyDetails.location.address}</li>
						<li>{companyDetails.location.city}</li>
						<li>{companyDetails.location.postal}</li>
					</ul>
					<hr className='my-8'></hr>
					<h3 className='mb-6 text-2xl underline underline-offset-8'>Store Hours</h3>
					<ul className='space-y-2 text-xl'>
						<li>{companyDetails.hours.open}</li>
						<li>{companyDetails.hours.closed}</li>
					</ul>
				</div>
			</section>
		</Layout>
	);
}
