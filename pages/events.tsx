import { Layout } from '@/components/Layout';
import useSWR from 'swr';
import { Calendar } from 'phosphor-react';
import { EventComponent } from '@/components/EventComponent';
import { isFuture, parseISO } from 'date-fns';

// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export default function Events() {
	const events = useEvents();
	return (
		<>
			<Layout title='Events - City Cyclery' description='Upcoming events'>
				<div className='mt-16 max-w-5xl m-auto p-4 mb-4'>
					<div className='flex flex-col gap-3 text-light-500 my-16 items-baseline flex-wrap'>
						<div className='flex flex-row gap-3 items-baseline'>
							<h1 className='font-bold text-4xl'>Upcoming Events</h1>
							<Calendar size={32} />
						</div>
						<span className='font-medium text-xs text-light-500 block'>
							All times are based on timezone: {timezone}.
						</span>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{events.data ? (
							events.data.map((event: any) =>
								isFuture(parseISO(event.endTime)) ? (
									<div
										key={event.eventId}
										className='m-auto 11/12 bg-dark-700 rounded-2xl py-8 px-6 min-h-[17.25rem] min-w-full'
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
								) : (
									<></>
								),
							)
						) : events.isLoading ? (
							<span className='font-medium text-lg text-light-500'>
								Loading Events...
							</span>
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

function useEvents() {
	const { data, error, isLoading } = useSWR(`/api/events`, fetcher);

	return {
		data: data,
		isLoading,
		isError: error,
	};
}
