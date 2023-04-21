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
	return (
		<div>
			<h2 className='font-bold text-2xl text-accent-500'>{title}</h2>
			{location ? (
				<span className='font-medium text-lg text-light-500'>{location}</span>
			) : (
				''
			)}
			<div className='text-base text-light-600 mt-2 whitespace-normal'>
				{description}
			</div>
		</div>
	);
}
