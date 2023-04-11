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
                    <div className='grid lg:grid-cols-3 gap-x-10 gap-y-2'>
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
                    <div className='grid lg:grid-cols-3 gap-x-10 gap-y-2'>
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
                        <Image
                        src='/services-img.jpg'
                        alt='Bike Repair Graphic'
                        width={350}
                        height={350}
                        className='rounded-xl'
                        ></Image>
                        <div>
                        <h2 className='font-bold text-4xl text-light-500 mb-4'>Installs & Adjustments</h2>
                            <div className='grid lg:grid-cols-2 gap-x-6 gap-y-2 mb-4'>
                                {installs.map((install) => (
                                <CardComponent
                                title={install.title}
                                description={install.description}
                                key={install.title}
                                ></CardComponent>
                                ))}
                            </div>
                            <div className='grid lg:grid-cols-2 gap-x-6 gap-y-2'>
                                {adjustments.map((adjustment) => (
                                <CardComponent
                                title={adjustment.title}
                                description={adjustment.description}
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
