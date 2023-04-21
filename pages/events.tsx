import { Layout } from '@/components/Layout';
import CardComponent from '@/components/CardComponent';
import useSWR from 'swr';
import { Calendar } from 'phosphor-react';
import { EventComponent } from '@/components/EventComponent';

// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export default function Events() {
	const events = getEvents();
	return (
		<>
			<Layout title='Events - City Cyclery' description='Upcoming events'>
				<div className='mt-16 max-w-5xl m-auto p-4 mb-4'>
					<div className='flex flex-row gap-3 text-light-500 my-16 items-baseline'>
						<h1 className='font-bold text-4xl'>Upcoming Events</h1>
						<Calendar size={32} />
						<span className='font-medium text-xs text-light-500 block'>
							All times are based on timezone: {timezone}.
						</span>
					</div>
					<div className='grid grid-cols-2 gap-8'>
						{events.data ? (
							events.data.map((event: any) => (
								<div
									key={event.eventId}
									className='m-auto 11/12 bg-dark-700 rounded-2xl py-8 px-6 min-h-[17.25em]'
								>
									<EventComponent
										title={event.title}
										startTime={event.startTime}
										endTime={event.endTime}
										dateType={event.dateType}
										description={event.description}
										location={event.location}
									></EventComponent>
								</div>
							))
						) : (
							<span className='font-medium text-lg text-light-500'>
								No events found...
							</span>
						)}
					</div>
				</div>
			</Layout>
		</>
	);
}

function getEvents() {
	const { data, error, isLoading } = useSWR(`/api/events`, fetcher);

	return {
		data: data,
		isLoading,
		isError: error,
	};
}
