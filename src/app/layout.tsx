import NavBar from '../components/NavBar'
import './globals.css'

export const metadata = {
	title: 'The Gamer&apos;s Nation',
	description: 'One Place for all your gaming queries.'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='bg-red-50  flex flex-col px-4 py-2 min-h-screen'>
				<header>
					<NavBar />
				</header>
				<main className='grow py-3'>{children}</main>
				<footer className='text-center text-xs border-t py-3'>
					Game data and images courtesy of{' '}
					<a
						href='https://rawg.io/'
						target='_blank'
						className='text-red-800 hover:underline'
					>
						RAWG
					</a>
				</footer>
			</body>
		</html>
	)
}
