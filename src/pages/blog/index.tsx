import { InferGetStaticPropsType, NextPage } from 'next';
import PostCard from '@/component/PostCard';

interface PostApiResponse {
	postInfo: {
		title: string;
		slug: string;
		meta: string;
	}[];
}

export const getStaticProps = async () => {
	const { postInfo }: PostApiResponse = await fetch('http://localhost:3000/api/posts').then(
		(data) => data.json(),
	);

	return {
		props: { posts: postInfo },
	};
};

type BlogPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
	return (
		<div className='max-w-3xl mx-auto p-5 space-y-5'>
			{posts.map((post) => (
				<PostCard key={post.slug} title={post.title} description={post.meta} slug={post.slug} />
			))}
		</div>
	);
};
export default BlogPage;
