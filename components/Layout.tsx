import { Navbar } from '@/components/Navbar';
import { HeadComponent } from '@/components/Head';
import { Footer } from '@/components/Footer';

type Props = { children: React.ReactNode; title: string; description?: string };

export function Layout({ children, title, description }: Props) {
	return (
		<>
			<HeadComponent title={title} description={description} />
			<Navbar />
			<main className='flex flex-col min-h-screen'>{children}</main>
			<Footer />
		</>
	);
}
