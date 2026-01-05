import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogIndex() {
    const posts = getSortedPostsData();

    return (
        <main>
            <h1 className="font-semibold text-xl mb-8">Blog</h1>
            <ul className="flex flex-col space-y-6">
                {posts.map(({ slug, frontmatter }) => (
                    <li key={slug} className="group">
                        <Link href={`/blog/${slug}`} className="block">
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                                <h2 className="font-medium underline decoration-muted underline-offset-4 group-hover:decoration-foreground transition-all">
                                    {frontmatter.title}
                                </h2>
                                <time className="text-sm text-muted font-mono shrink-0 sm:ml-4">
                                    {frontmatter.date}
                                </time>
                            </div>
                            {frontmatter.excerpt && (
                                <p className="text-muted text-sm leading-relaxed max-w-prose">
                                    {frontmatter.excerpt}
                                </p>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
