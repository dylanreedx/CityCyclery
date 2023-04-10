import { HeadComponent } from '@/components/Head';
import Image from 'next/image';
import Button from '@/components/Button';
import { Poppins } from '@next/font/google';

// const poppins = Poppins({
//   weight: '400',
//   style: 'normal',
// });

export default function Home() {
  return (
    <>
      <HeadComponent
        title={'Home - City Cyclery'}
        description={
          'Sales, Service & Repair of Any & All Bicycles - Windsor, ON'
        }
      ></HeadComponent>
      <main className='bg-dark-500'>
        <h1 className='text-red-200'>test</h1>
        <Button href='/services' variant='primary' textSize='base'>
          Services
        </Button>
      </main>
    </>
  );
}
