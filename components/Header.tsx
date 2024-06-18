import Image from "next/image";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavLink from "./NavLink";

export default function Header() {
    return (
        <header className='m-2 flex flex-col md:flex-row md:justify-between'>
            <div><h2>Logo</h2></div>
            <nav className='flex flex-col border-red-200 border-2 md:flex-row'>
                <NavLink href='/'>
                    Link 1
                </NavLink>
                <NavLink href='/'>
                    Link 2
                </NavLink>
            </nav>
        </header>
    );
}
