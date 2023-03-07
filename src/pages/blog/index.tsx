import { InferGetStaticPropsType, NextPage } from 'next';
import { readPostsInfo } from 'lib/helper';
import { PostApiResponse } from 'utils/types';
import PostCard from '@/component/PostCard';

export const getStaticProps = async () => {
	const postInfo: PostApiResponse = readPostsInfo();

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
