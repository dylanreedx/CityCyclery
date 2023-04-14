import Head from 'next/head';

type Props = {
	title: string;
	description: string | undefined;
};
export function HeadComponent({ title, description }: Props) {
	const defaultDescription =
		'Sales, Service & Repair of Any & All Bicycles - Windsor, ON';
	return (
		<Head>
			<meta charSet='utf-8' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta name='robots' content='index, follow' />
			<title>{title}</title>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='description' content={description || defaultDescription} />
			<meta name='keywords' content='City, Cyclery, Bikes, Windsor, Repair' />
			<link rel='icon' href='/cc-lm-light.svg' />
		</Head>
	);
}
