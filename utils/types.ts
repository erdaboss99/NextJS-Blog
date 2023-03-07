import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

export type PostApiResponse = {
	title: string;
	slug: string;
	meta: string;
}[];

export type Post = {
	post: {
		title: string;
		content: MDXRemoteSerializeResult;
	};
};
