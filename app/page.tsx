import Avatar from '@/components/Avatar';
import Link from 'next/link';
import { homeContent } from './content';

export default function Home() {
    return (
        <main className="flex flex-col gap-10">
            {/* ABOUT SECTION: Combined Intro + Bio with Wrapped Avatar */}
            <section className="relative clearfix">
                <h1 className="sr-only">{homeContent.title}</h1>

                {/* Subtle Label */}
                <span className="block font-medium text-sm tracking-widest text-neutral-500 uppercase mb-4">
                    {homeContent.aboutHeading}
                </span>

                {/* Avatar with Float - Flowing text around it */}
                <div className="float-right ml-6 mb-2 relative z-10 hidden md:block">
                    {/* Hidden on mobile, shown on md+ for wrapping */}
                    <Avatar />
                </div>
                <div className="md:hidden mb-6 flex justify-center">
                    {/* Centered on mobile */}
                    <Avatar />
                </div>


                {/* Combined Text Flow */}
                <div className="leading-relaxed max-w-prose">
                    {/* Intro */}
                    <p className="text-white text-lg font-medium mb-6 inline">
                        {homeContent.intro}
                    </p>

                    {/* Full Bio */}
                    <div className="text-neutral-300 text-base whitespace-pre-line inline">
                        {'\n\n'}
                        {homeContent.fullBio}
                    </div>
                </div>
            </section>

            {/* TECHNICAL HIGHLIGHTS */}
            <section className="flex flex-col gap-3">
                <h2 className="font-medium text-sm tracking-widest text-neutral-500 uppercase">
                    {homeContent.technicalHeading}
                </h2>
                <div className="text-neutral-300 leading-relaxed whitespace-pre-line max-w-prose text-sm md:text-base">
                    {homeContent.technicalHighlights}
                </div>
            </section>
        </main>
    );
}
