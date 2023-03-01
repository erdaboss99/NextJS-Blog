import { NextPage } from 'next';

interface BlogPageProps {}

const BlogPage: NextPage<BlogPageProps> = () => {
	return (
		<div className='max-w-3xl mx-auto p-5'>
			<div className='bg-green-100 p-2 rounded'>
				<h1 className='text-gray-900 text-3xl font-semibold'>Lorem ipsum dolor sit amet.</h1>
				<p className='text-gray-500'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellendus totam
					ducimus fuga corrupti quia expedita modi sequi eaque at.
				</p>
			</div>
		</div>
	);
};
export default BlogPage;
