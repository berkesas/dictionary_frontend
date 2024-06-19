import cn from 'classnames';

interface Props {
    href?: string;
    children: React.ReactNode;
    [rest: string]: any;
}

export default function Button({
    href,
    children,
    ...rest
}: Props) {
    const className = cn(
        rest.className,
        'flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
    );

    return (
        <a className={className} role='button'>{children}</a>
    )
}