# API

## Events

Accessed at /api/events

The events api route returns an array of event objects

```
type EventData = {
	eventId: string;
	startTime: string;
	endTime: string;
	dateType: string;
	title: string;
	description: string;
	location: string;
};
```

| **Prop**    | **Desc**                                                                                                                                                                                                                                                                     | **Example**                                                                                                |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| eventId     | A random alphanumeric string, followed by "@google.com". Provided by google                                                                                                                                                                                                  | "7ncsbffrtkkoinvim9uu4fdlem@google.com"                                                                    |
| startTime   | The events UTC start time in datetime format. If `dateType` is set to date-time, timestamp will compensate for UTC offset. However in this case, we can ignore timestamps.                                                                                                   | For EDT (UTC -4): "2023-04-14T04:00:00.000Z"                                                               |
| endTime     | The events UTC start time in datetime format.                                                                                                                                                                                                                                | "2023-04-14T04:00:00.000Z"                                                                                 |
| dateType    | Identifies the format of `startTime` and `endTime`. Can equal either "date" or "date-time". "date" is used for All-Day events, and "date-time" is used for events with specific start and end times. We can use this field to determine whether to ignore timestamps or not. | "date-time" or "date"                                                                                      |
| title       | String of the title of the event.                                                                                                                                                                                                                                            | "Grand Opening!"                                                                                           |
| description | String of the events description.                                                                                                                                                                                                                                            | "Lorem ipsum dolor sit amet consectetur. Tristique adipiscing sed ut donec feugiat lorem malesuada massa." |
| location    | String of the address the event takes place.                                                                                                                                                                                                                                 | "City Cyclery Inc., 1008 Drouillard Rd, Windsor, ON N8Y 2P8, Canada"                                       |