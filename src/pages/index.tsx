import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<h1 className='text-3xl font-bold text-center'>Welcome to the home page!</h1>
			<Link className='block' href='/blog'>
				<div className='bg-blue-100 w-[15%] mx-auto my-5 p-2 rounded text-center'>
					<h2 className='text-gray-900 text-3xl font-semibold'>List of articles</h2>
				</div>
			</Link>
		</div>
	);
}
