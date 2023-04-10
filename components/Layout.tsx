import { Navbar } from '@/components/Navbar';
import { HeadComponent } from '@/components/Head';
import { Footer } from '@/components/Footer';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<HeadComponent />
			<main>
				<Navbar />
				{children}
				<Footer />
			</main>
		</>
	);
}
