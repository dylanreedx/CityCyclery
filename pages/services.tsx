import { HeadComponent } from '@/components/Head';
import Link from 'next/link';

import { Poppins } from '@next/font/google';
import { Navbar } from '@/components/Navbar';
import { Layout } from '@/components/Layout';

export default function Services() {
	return (
		<>
			<Layout title='Services - City Cyclery'>
                <h1>Services</h1>
                
                <h2>Builds</h2>

                <h4>Bike Build</h4>
                <p>$100.00</p>
                <p>This is the description of the bike biuld.</p>

                <h4>E-Bike Build</h4>
                <p>$150.00</p>
                <p>This is the description of the e-bike biuld.</p>

                <h4>Trike Build</h4>
                <p>$250.00</p>
                <p>This is the description of the trike biuld.</p>

                <h2>Tune-ups</h2>

                <h4>Bike Tune</h4>
                <p>$90.00</p>
                <p>This is the description of the bike tune.</p>

                <h4>Bike Wash-Bolt Tighten</h4>
                <p>$35.00</p>
                <p>This is the description of the bike wash and bolt tighten.</p>

                <h2>Installs & Adjustments</h2>
			</Layout>
		</>
	);
}
