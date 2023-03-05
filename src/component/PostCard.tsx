import Link from 'next/link';
import { FC } from 'react';

interface PostCardProps {
	title: string;
	description: string;
	slug: string;
}

const PostCard: FC<PostCardProps> = ({ title, description, slug }): JSX.Element => {
	return (
		<Link className='block' href={'/blog/' + slug}>
			<div className='bg-green-100 p-2 rounded'>
				<h1 className='text-gray-900 text-3xl font-semibold'>{title}</h1>
				<p className='text-gray-500'>{description}</p>
			</div>
		</Link>
	);
};

export default PostCard;
