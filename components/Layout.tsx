import { Navbar } from '@/components/Navbar';
import { HeadComponent } from '@/components/Head';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<HeadComponent />
			<main>
				<Navbar />
				{children}
			</main>
		</>
	);
}
