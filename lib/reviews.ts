import { readdir, readFile } from 'node:fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

export interface Review {
    slug: string;
    title: string;
    date: string;
    image: string;
    body: string;
}

export async function getFeaturedReview(slug: string): Promise<Review> {
    const reviews = await getReviews();
    return reviews[0];
}

export async function getReview(slug: string): Promise<Review> {
    const text = await readFile(`./content/savings/${slug}.md`, 'utf8');

    const {
        content,
        data: { title, date, image },
    } = matter(text);

    const body = marked(content, {
        headerIds: false,
        mangle: false,
    });

    return { slug, title, date, image, body };
}

export async function getReviews(): Promise<Review[]> {
    const slugs = await getSlugs();

    const reviews = [];

    for (const slug of slugs) {
        const review = await getReview(slug);
        reviews.push(review);
    }

    // TODO: Sort all the reviews by most recent first.
    const sortedReviews = [
        ...reviews.sort((a, b) => b.date.localeCompare(a.date)),
    ];

    return sortedReviews;
}

export async function getSlugs(): Promise<string[]> {
    const files = await readdir('./content/savings');

    const slugs = files
        .filter((file) => file.endsWith('.md'))
        .map((file) => file.slice(0, -'.md'.length));

    return slugs;
}
