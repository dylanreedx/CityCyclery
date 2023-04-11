import type { NextApiRequest, NextApiResponse } from 'next';
import { async as ical } from 'node-ical';
import { calendar } from "@/utils/calendar";


export default async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    try {
        // Parse iCal data
        const events = await ical.fromURL(calendar);
        res.status(200).json(events);

    } catch (err) {
        console.error('Failed to fetch iCal data:', err);
        res.status(500).json({ error: 'Failed to fetch iCal data' });
    }
}
