import { format, parseISO } from 'date-fns';

export type EventProps = {
	startTime: string;
	endTime: string;
	dateType: string;
	title: string;
	description: string;
	location: string;
};

export function EventComponent({
	startTime,
	endTime,
	dateType,
	title,
	description,
	location,
}: EventProps) {
	// format date
	const dateString =
		dateType === 'date'
			? format(parseISO(startTime), 'EEEE, LLLL d')
			: format(parseISO(startTime), "LLL d 'at' h:mm a") +
			  format(parseISO(endTime), " - LLL d 'at' h:mm a");
	return (
		<div className='w-full'>
			<h2 className='font-bold text-2xl text-accent-500'>{title}</h2>
			<span className='font-medium text-lg text-light-500 block'>
				{dateString}
			</span>
			<span className='text-base text-md text-light-600'>{location}</span>
			<div className='text-base text-light-600 mt-2 whitespace-normal'>
				<p className='line-clamp-5'>{description}</p>
			</div>
		</div>
	);
}
