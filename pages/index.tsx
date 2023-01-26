import Head from 'next/head';
import Image from 'next/image';
import { Poppins } from '@next/font/google';

// const poppins = Poppins({
//   weight: '400',
//   style: 'normal',
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          City Cyclery - Sales, Service & Repair of Any & All Bicycles
        </title>
        <meta
          name='description'
          content='Sales, Service & Repair of Any & All Bicycles - Windsor, ON'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-dark-500'>
        <h1 className='text-red-200'>test</h1>
      </main>
    </>
  );
}
