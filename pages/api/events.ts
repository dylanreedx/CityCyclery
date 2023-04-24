import type { NextApiRequest, NextApiResponse } from 'next';
import { async as ical } from 'node-ical';
import { calendar } from '@/utils/calendar';

type EventData = {
	eventId: string;
	startTime: string;
	endTime: string;
	dateType: string;
	title: string;
	description: string;
	location: string;
};

type EventResponseError = {
	error: string;
	errorMsg: unknown;
};

export default async function Events(
	req: NextApiRequest,
	res: NextApiResponse<EventData[] | EventResponseError>,
) {
	try {
		// Fetch parse and filter iCal data
		ical.fromURL(calendar).then((data: any) => {
			res.status(200).json(filterEvents(data));
		});
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch iCal data', errorMsg: err });
	}
}

function filterEvents(data: any) {
	let responseData: EventData[] = [];
	for (let key in data) {
		if (data[key].type === 'VEVENT' && data[key].summary != 'Busy') {
			responseData.push({
				eventId: key,
				startTime: data[key].start,
				endTime: data[key].end,
				dateType: data[key].datetype,
				title: data[key].summary,
				description: data[key].description,
				location: data[key].location,
			});
		}
	}
	return responseData.sort((a, b) =>
		a.startTime > b.startTime ? 1 : b.startTime > a.startTime ? -1 : 0,
	);
}
