import Avatar from '@/components/Avatar';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <section className="mb-12">
                <Avatar />
                <h1 className="font-semibold text-xl mb-4">Ricardo Ferreira</h1>
                <p className="text-muted leading-relaxed mb-6">
                    Full-stack engineer, systems thinker, and minimalist. Currently building high-performance web applications and exploring sustainable software engineering.
                </p>
                <p className="text-muted leading-relaxed">
                    I'm interested in distributed systems, clean architecture, and the intersection of design and technology.
                </p>
            </section>

            <div className="border-t border-gray-100 my-8 w-12" />

            <section className="mb-12">
                <h2 className="font-medium mb-4 text-sm uppercase tracking-wider text-muted">Now</h2>
                <p className="leading-relaxed mb-4">
                    Focused on digging deeper into Next.js internals and optimizing web performance metrics. Reading "Designing Data-Intensive Applications" (again).
                </p>
            </section>

            <section className="mb-12">
                <h2 className="font-medium mb-4 text-sm uppercase tracking-wider text-muted">Writing</h2>
                <ul className="flex flex-col space-y-2">
                    <li>
                        <Link href="/blog/hello-world" className="underline decoration-muted underline-offset-4 hover:decoration-foreground transition-all">
                            Hello World: A Clean Slate
                        </Link>
                        <span className="text-muted text-sm ml-2">2026</span>
                    </li>
                    <li>
                        <Link href="/blog/minimalism-in-code" className="underline decoration-muted underline-offset-4 hover:decoration-foreground transition-all">
                            Minimalism in Code
                        </Link>
                        <span className="text-muted text-sm ml-2">2025</span>
                    </li>
                </ul>
            </section>
        </main>
    );
}
