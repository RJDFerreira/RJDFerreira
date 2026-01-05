import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Ricardo Ferreira',
    description: 'Personal website of Ricardo Ferreira.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased max-w-2xl mx-auto px-6 py-4 md:py-12 bg-background text-foreground text-base">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
