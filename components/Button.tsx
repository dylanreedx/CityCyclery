import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

const buttonStyle = cva(
	'py-2 px-4 rounded flex-row items-center justify-evenly',
	{
		variants: {
			variant: {
				primary: 'bg-accent-500',
				secondary: 'bg-dark-600 text-white',
			},
		},
	},
);
const buttonTextStyle = cva('font-poppins', {
	variants: {
		textSize: {
			sm: 'text-xs',
			base: 'text-sm',
			lg: 'text-lg',
		},
	},
});

interface ButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		VariantProps<typeof buttonStyle>,
		VariantProps<typeof buttonTextStyle> {
	children: React.ReactNode;
	variant: 'primary' | 'secondary';
	icon?: React.ReactNode;
	textSize?: 'sm' | 'base' | 'lg';
	href: string;
}

export default function Button({
	children,
	variant,
	icon,
	textSize,
	href,
	...props
}: ButtonProps) {
	return (
		<Link href={href} {...props} className={buttonStyle({ variant })}>
			{icon && icon}
			<span className={buttonTextStyle({ textSize })}>{children}</span>
		</Link>
	);
}
