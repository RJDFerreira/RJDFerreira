import Avatar from '@/components/Avatar';
import Link from 'next/link';
import { homeContent } from './content';

export default function Home() {
    return (
        <main className="flex flex-col gap-8 md:gap-10">
            {/* HERO SECTION: Intro + Avatar */}
            <section className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-6 md:gap-10">
                <div className="flex-1 flex flex-col gap-3">
                    <h1 className="sr-only">{homeContent.title}</h1>

                    {/* Subtle Label */}
                    <span className="block font-medium text-sm tracking-widest text-neutral-500 uppercase">
                        {homeContent.aboutHeading}
                    </span>

                    {/* Primary Intro Text */}
                    <p className="text-white text-lg leading-relaxed font-medium max-w-prose">
                        {homeContent.intro}
                    </p>
                </div>

                <div className="shrink-0 relative">
                    <Avatar />
                </div>
            </section>

            {/* FULL BIO */}
            <section>
                <div className="text-neutral-300 leading-relaxed whitespace-pre-line max-w-prose text-base">
                    {homeContent.fullBio}
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
