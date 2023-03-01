import PostCard from 'component/PostCard';
import { NextPage } from 'next';

interface BlogPageProps {}

const BlogPage: NextPage<BlogPageProps> = () => {
	return (
		<div className='max-w-3xl mx-auto p-5 space-y-5'>
			<PostCard
				title='This is my title for the first post on this blog'
				description='This is the description for the first post on this blog'
			/>
			<PostCard
				title='This is my title for the second post on this blog'
				description='This is the description for the second post on this blog'
			/>
			<PostCard
				title='This is my title for the third post on this blog'
				description='This is the description for the third post on this blog'
			/>
		</div>
	);
};
export default BlogPage;
