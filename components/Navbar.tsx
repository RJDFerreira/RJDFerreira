import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-8 mb-8">
            <ul className="flex flex-row space-x-6">
                <li>
                    <Link href="/" className="hover:text-muted transition-colors">
                        about
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className="hover:text-muted transition-colors">
                        blog
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
