import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
	return rss({
		title: 'kobapi.me',
		description: '技術やら日常やら',
		site: 'https://kobapi.me',
		items: await pagesGlobToRssItems(import.meta.glob<import('@/types/frontMatter').FrontMatter>('./**/*.md')),
		customData: `<language>ja-jp</language>`,
	});
}