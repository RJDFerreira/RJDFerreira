import { getPostBySlug, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function Post({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="prose prose-headings:font-medium prose-p:text-muted prose-a:underline prose-a:decoration-muted hover:prose-a:decoration-foreground prose-a:underline-offset-4 prose-code:font-mono prose-code:text-xs prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-100 prose-pre:rounded-none prose-pre:overflow-x-auto dark:prose-invert max-w-none">
            <header className="mb-10 not-prose">
                <h1 className="text-xl font-semibold mb-2">{post.frontmatter.title}</h1>
                <time className="text-sm text-muted font-mono block">{post.frontmatter.date}</time>
            </header>
            <MDXRemote source={post.content} />
        </article>
    );
}
