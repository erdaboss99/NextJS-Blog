import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import PostCard from 'component/PostCard';

interface BlogPageProps {}

const BlogPage: NextPage<BlogPageProps> = () => {
	const [posts, setPosts] = useState<{ title: string; slug: string; meta: string }[]>([]);

	const fetchPost = async () => {
		const res = await fetch('/api/posts').then((data) => data.json());
		setPosts(res.postInfo);
	};
	useEffect(() => {
		fetchPost();
	}, []);

	return (
		<div className='max-w-3xl mx-auto p-5 space-y-5'>
			{posts.map((post) => (
				<PostCard key={post.slug} title={post.title} description={post.meta} />
			))}
		</div>
	);
};
export default BlogPage;
