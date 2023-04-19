import { Layout } from '@/components/Layout';
import { CalendarCheck, Chat } from 'phosphor-react';
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
			<section className='grid place-items-center text-light-500 z-50 -translate-y-10'>
				<div className='bg-dark-600 py-12 px-20 rounded-xl shadow-md'>
					<div className='pb-12'>
						<div className='flex flex-row gap-3 items-baseline'>
							<h1 className='font-medium text-3xl mb-3'>Contact Us</h1>
							<Chat size={30} />
						</div>
						<p className='text-light-600 max-w-[35ch]'>
							Inquiry about anything regarding services, tune-ups, and builds!
						</p>
					</div>
					<form action='' className='flex flex-col gap-2'>
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
									<option value='service'>Services</option>
									<option value='tuneup'>Brands</option>
									<option value='tuneup'>Business</option>
									<option value='tuneup'>Social</option>
									<option value='tuneup'>General</option>
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
							label='message'
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
				<div className='flex flex-col py-10 px-20 mt-16 text-light-500 bg-dark-600 rounded-xl text-center'>
					<CalendarCheck size={40} className='mx-auto mb-3' />
					<h3 className='mb-6 text-3xl font-semibold'>Store Hours</h3>
					<ul className='space-y-3 text-xl'>
						<li>{companyDetails.hours.open}</li>
						<li>{companyDetails.hours.closed}</li>
					</ul>
				</div>
			</section>
		</Layout>
	);
}
