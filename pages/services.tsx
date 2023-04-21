import Image from 'next/image';
import { Poppins } from '@next/font/google';
import { Layout } from '@/components/Layout';
import CardComponent from '@/components/CardComponent';
import { builds, tunes, installs, adjustments, misc } from '@/utils/services-data';
import { Wrench } from 'phosphor-react';

export default function Services() {
	return (
		<>
			<Layout
                title='Services - City Cyclery'
            >
                <div className='grid mt-16 max-w-5xl m-auto p-4 mb-4'>
                    <div className='flex flex-row gap-3 text-light-500 my-16 items-baseline'>
                        <h1 className='font-bold text-4xl'>Services</h1>
                        <Wrench size={30}/>
                    </div>
                    <h2 className='font-bold text-4xl text-light-500 mb-4'>Builds</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2 p-8 rounded-xl bg-dark-600'>
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
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2 p-8 rounded-xl bg-dark-600'>
                    {tunes.map((tune) => (
                        <CardComponent
                        title={tune.title}
                        price={tune.price}
                        description={tune.description}
                        key={tune.title}
                        ></CardComponent>
                    ))}
                    </div>
                    <div className='grid gap-12 mt-10 justify-center'>
                        <div>
                            <h2 className='font-bold text-4xl text-light-500 mb-4'>Installs</h2>
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-8 rounded-xl bg-dark-600'>
                                {installs.map((install) => (
                                <CardComponent
                                title={install.title}
                                price={install.price}
                                key={install.title}
                                ></CardComponent>
                                ))}
                            </div>
                            <h2 className='font-bold text-4xl text-light-500 mb-4 mt-10'>Adjustments</h2>
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-8 rounded-xl bg-dark-600'>
                                {adjustments.map((adjustment) => (
                                <CardComponent
                                title={adjustment.title}
                                price={adjustment.price}
                                key={adjustment.title}
                                ></CardComponent>
                                ))}
                            </div>
                            <h2 className='font-bold text-4xl text-light-500 mb-4 mt-10'>Miscellaneous</h2>
                            <div className='grid md:grid-cols-3 gap-3 p-8 rounded-xl mb-4 bg-dark-600'>
                                {misc.map((value) => (
                                    <div className='py-8 px-6 rounded-3xl' key={value.title}>
                                        <h2 className='text-2xl text-accent-500 font-bold'>{value.title}</h2>
                                        <span className='text-light-500 text-3xl font-semibold'>${value.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
			</Layout>
		</>
	);
}
