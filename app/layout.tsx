import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'Ricardo Ferreira',
        template: '%s | Ricardo Ferreira',
    },
    description: 'Personal website of Ricardo Ferreira. Product-driven engineer working at the intersection of hardware, software, and complex systems.',
    openGraph: {
        title: 'Ricardo Ferreira',
        description: 'Product-driven engineer working at the intersection of hardware, software, and complex systems.',
        url: 'https://rjdferreira.com',
        siteName: 'Ricardo Ferreira',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased max-w-2xl mx-auto px-6 py-4 md:py-12 bg-background text-foreground text-base`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
