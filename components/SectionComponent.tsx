import Button from './Button';

type SectionProps = {
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
}: SectionProps) {
	return (
		<section className={'w-full h-full my-4 '.concat(style)}>
			<div className='flex flex-row items-center gap-3 mb-4'>
				<h2 className='font-bold text-3xl text-light-500'>{title}</h2>
				<Button href={btnAction} variant='secondary-base'>
					{btnText}
				</Button>
			</div>
			{children}
		</section>
	);
}
