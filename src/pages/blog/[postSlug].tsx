import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ParsedUrlQuery } from 'querystring';

type SinglePostPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const SinglePostPage: NextPage<SinglePostPageProps> = (props) => {
	return (
		<div>
			<h1>{props.post.title}</h1>
			<h1>{props.post.content}</h1>
		</div>
	);
};

interface IStaticProps extends ParsedUrlQuery {
	postSlug: string;
}

type Post = {
	post: {
		title: string;
		content: string;
	};
};

export const getStaticProps: GetStaticProps<Post> = (context) => {
	const { params } = context;
	const { postSlug } = params as IStaticProps;

	const filePathToRead = path.join(process.cwd(), 'posts/' + postSlug + '.md');
	const fileContent = fs.readFileSync(filePathToRead, 'utf-8');

	const { content, data } = matter(fileContent);

	return {
		props: {
			post: {
				content,
				title: data.title,
			},
		},
	};
};

export const getStaticPaths: GetStaticPaths = () => {
	const dirPathToRead = path.join(process.cwd(), 'posts');
	const dirs = fs.readdirSync(dirPathToRead);
	const paths = dirs.map((filename) => {
		const filePathToRead = path.join(process.cwd(), 'posts/' + filename);
		const fileContent = fs.readFileSync(filePathToRead, 'utf-8');
		return { params: { postSlug: matter(fileContent).data.slug } };
	});

	return {
		paths,
		fallback: false,
	};
};

export default SinglePostPage;
