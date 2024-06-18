import Link from 'next/link';
import cn from 'classnames';

interface Props {
	isSelected?: boolean;
	isMobile?: boolean;
	isBanner?: boolean;
	href?: string;
	children: React.ReactNode;
	[rest: string]: any;
}

export default function NavLink({
	isSelected,
	isMobile,
	isBanner,
	href,
	children,
	...rest
}: Props) {
	const className = cn(
		rest.className,
		'flex flex-grow p-1 border-2 rounded text-lg mt-1 md:ml-1 md:mt-0 hover:bg-green-500 hover:text-white',
	);

	if (!href) {
		return (
			<div className={className} role='button' onClick={rest.onClick}>
				{children}
			</div>
		);
	}

	return (
		<Link className={className} href={href}>
			{children}
		</Link>
	);
}
