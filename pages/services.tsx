import Image from 'next/image';
import { Poppins } from '@next/font/google';
import { Layout } from '@/components/Layout';
import CardComponent from '@/components/CardComponent';
import { builds, tunes, installs, adjustments } from '@/utils/services-data';

export default function Services() {
	return (
		<>
			<Layout
                title='Services - City Cyclery'
            >
                <div className='mt-16 max-w-5xl m-auto p-4 mb-4'>
                    <h1 className='font-bold text-4xl text-light-500 my-16'>Services</h1>
                    <h2 className='font-bold text-4xl text-light-500 mb-4'>Builds</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2'>
                    {builds.map((build) => (
                        <CardComponent
                        title={build.title}
                        price={build.price}
                        description={build.description}
                        key={build.title}
                        ></CardComponent>
                    ))}
                    </div>
                    <h2 className='font-bold text-4xl text-light-500 mb-4 mt-10'>Tune-ups</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2'>
                    {tunes.map((tune) => (
                        <CardComponent
                        title={tune.title}
                        price={tune.price}
                        description={tune.description}
                        key={tune.title}
                        ></CardComponent>
                    ))}
                    </div>
                    <div className='flex flex-wrap-reverse gap-12 mt-10'>
                        <div>
                            <h2 className='font-bold text-4xl text-light-500 mb-4'>Installs & Adjustments</h2>
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {installs.map((install) => (
                                <CardComponent
                                title={install.title}
                                price={install.price}
                                key={install.title}
                                ></CardComponent>
                                ))}
                            </div>
                            <hr className="m-auto my-12 w-5/6 h-0.5 border-t-0 bg-light-600 opacity-100 dark:opacity-50" />
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {adjustments.map((adjustment) => (
                                <CardComponent
                                title={adjustment.title}
                                price={adjustment.price}
                                key={adjustment.title}
                                ></CardComponent>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
			</Layout>
		</>
	);
}
