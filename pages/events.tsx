import { Layout } from '@/components/Layout';
import CardComponent from '@/components/CardComponent';
import { Calendar } from 'phosphor-react';
import { isMetaProperty } from 'tsutils';

export default function Events() {
	return (
		<>
			<Layout title='Events - City Cyclery' description='Upcoming events'>
				<div className='mt-16 max-w-5xl m-auto p-4 mb-4'>
					<div className='flex flex-row gap-3 text-light-500 my-16 items-baseline'>
						<h1 className='font-bold text-4xl'>Events</h1>
						<Calendar size={32} />
					</div>
				</div>
			</Layout>
		</>
	);
}

function getEvents() {}
