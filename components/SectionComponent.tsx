import Button from './Button';

type Props = {
	children: React.ReactNode;
	title: string;
	btnText: string;
	btnAction: string;
	style: string;
};

export default function SectionComponent({
	children,
	title,
	btnText,
	btnAction,
	style,
}: Props) {
	return (
		<section className={'w-full h-full my-4 '.concat(style)}>
			<div className='flex items-center gap-1 mb-4'>
				<h2 className='font-medium text-2xl text-light-500'>{title}</h2>
				<Button href={btnAction} variant='secondary-base'>
					{btnText}
				</Button>
			</div>
			{children}
		</section>
	);
}
