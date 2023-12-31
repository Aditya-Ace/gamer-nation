import Link from 'next/link'

export default function NavBar() {
	return (
		<nav>
			<ul className='flex gap-2'>
				<li>
					<Link href='/' className='text-red-800 hover:underline'>
						Home
					</Link>
				</li>
				<li>
					<Link href='/reviews' className='text-red-800 hover:underline'>
						Reviews
					</Link>
				</li>
				<li>
					<Link href='/contact' className='text-red-800 hover:underline'>
						Contact
					</Link>
				</li>
				<li>
					<Link
						href='/about'
						prefetch={false}
						className='text-red-800 hover:underline'
					>
						About
					</Link>
				</li>
			</ul>
		</nav>
	)
}
