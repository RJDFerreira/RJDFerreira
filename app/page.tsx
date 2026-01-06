import Avatar from '@/components/Avatar';
import Link from 'next/link';
import { homeContent } from './content';

export default function Home() {
    return (
        <main>
            <section className="mb-8 flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
                <div className="flex-1 mt-4 md:mt-0">
                    <h1 className="sr-only">{homeContent.title}</h1>
                    <p className="text-white leading-relaxed mb-6 font-medium text-lg">
                        {homeContent.aboutHeading}
                    </p>
                    <p className="text-white leading-relaxed mb-6 text-lg">
                        {homeContent.intro}
                    </p>
                </div>
                <div className="shrink-0 relative top-[-10px]">
                    <Avatar />
                </div>
            </section>

            <section className="mb-12">
                <p className="text-white leading-relaxed whitespace-pre-line">
                    {homeContent.fullBio}
                </p>
            </section>

            <section className="mb-12">
                <h2 className="font-medium mb-4 text-sm uppercase tracking-wider text-muted">{homeContent.technicalHeading}</h2>
                <p className="leading-relaxed mb-4 whitespace-pre-line">
                    {homeContent.technicalHighlights}
                </p>
            </section>


        </main>
    );
}
