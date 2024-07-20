import Link from 'next/link';
import DarkModeToggle from '../context/DarkModeToggle';
const Navbar = () => {
    return (
        <nav>
            <ul className='flex justify-between gap-4 text-black bg-white px-4 py-2 rounded-md font-bold uppercase'>
                <li><Link href="/">Spatium</Link></li>
                <li><Link href="/collection">Collection</Link></li>

                <li><Link href="/login">Sign In</Link></li>
                <li><Link href="/register">Sign Up</Link></li>


                <li><DarkModeToggle /></li>


            </ul>
            <ul>

            </ul>
        </nav>
    );
};

export default Navbar;
