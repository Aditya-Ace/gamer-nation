import Heading from '@/components/Heading'
import Link from 'next/link'

export default function ReviewsPage() {
	return (
		<section>
			<Heading>Reviews Page</Heading>
			<p>Here we&apos;ll list all the Reviews</p>
			<div>
				<nav>
					<ul>
						<li>
							<Link href='/reviews/elden-ring'>Elden Ring</Link>
						</li>
						<li>
							<Link href='/reviews/far-cry-6'>Far Cry 6</Link>
						</li>
						<li>
							<Link href='/reviews/hogwarts-legacy'>Hogwarts Legacy</Link>
						</li>
						<li>
							<Link href='/reviews/resident-evil-4'>Resident Evil 4</Link>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	)
}
