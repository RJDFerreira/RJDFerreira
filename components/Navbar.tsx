import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-8 mb-12">
            <Link href="/" className="font-bold text-lg tracking-tight hover:text-muted transition-colors">
                Ricardo Ferreira
            </Link>
            <ul className="flex flex-row space-x-6 text-sm font-medium">
                <li>
                    <Link href="/" className="hover:text-muted transition-colors">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className="hover:text-muted transition-colors">
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
