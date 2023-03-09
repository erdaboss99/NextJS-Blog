import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Post } from 'utils/types';

type SinglePostPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const SinglePostPage: NextPage<SinglePostPageProps> = ({ post }) => {
	const { content, title } = post;
	return (
		<div className='max-w-3xl mx-auto'>
			<h1 className='font-semibold text-2xl py-5'>{title}</h1>
			<div className='prose pb-20'>
				<MDXRemote {...content} />
			</div>
		</div>
	);
};

interface IStaticProps extends ParsedUrlQuery {
	postSlug: string;
}

export const getStaticProps: GetStaticProps<Post> = async (context) => {
	try {
		const { params } = context;
		const { postSlug } = params as IStaticProps;

		const filePathToRead = path.join(process.cwd(), 'posts/' + postSlug + '.md');
		const fileContent = fs.readFileSync(filePathToRead, 'utf-8');

		const source = await serialize(fileContent, { parseFrontmatter: true });

		return {
			props: {
				post: {
					content: source,
					title: source.frontmatter.title as string,
				},
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export const getStaticPaths: GetStaticPaths = () => {
	const dirPathToRead = path.join(process.cwd(), 'posts');
	const dirs = fs.readdirSync(dirPathToRead);
	const paths = dirs
		.filter((file) => file.endsWith('.md'))
		.map((filename) => {
			const filePathToRead = path.join(process.cwd(), 'posts/' + filename);
			const fileContent = fs.readFileSync(filePathToRead, 'utf-8');
			return { params: { postSlug: matter(fileContent).data.slug } };
		});

	return {
		paths,
		fallback: 'blocking',
	};
};

export default SinglePostPage;
