import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
			<body className={inter.className}>
				<header>[header]</header>
				<main>{children}</main>
				<footer>[footer]</footer>
			</body>
		</html>
	)
}
