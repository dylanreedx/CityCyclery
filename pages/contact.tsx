import { Layout } from '@/components/Layout';

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
			<div className='mt-32 min-h-[60vh] bg-dark-700'></div>
			<section className='grid place-items-center text-light-500 -translate-y-20'>
				<div className='bg-dark-600 py-12 px-20 rounded-xl shadow-md'>
					<div className='pb-12'>
						<h1 className='font-medium text-3xl'>Contact Us</h1>
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
			</section>
		</Layout>
	);
}
