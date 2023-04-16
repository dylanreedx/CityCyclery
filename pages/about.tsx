import Image from "next/image";
import { Layout } from "@/components/Layout";
import CardComponent from "@/components/CardComponent";
import { Info } from "phosphor-react";

export default function About() {
    return(
        <>
            <Layout
                title='About - City Cyclery'
                description='About us'
            >
                <div className='mt-16 max-w-5xl m-auto p-4 mb-4'>
                    <div className="flex flex-row gap-3 text-light-500 my-16 items-baseline">
                        <h1 className='font-bold text-4xl'>About Us</h1>
                        <Info size={30} />
                    </div>
                    <div className='grid lg:grid-cols-2 mb-24'>
                        <div className="grid grid-cols-1 text-light-600 mb-10 pr-8 gap-4">
                            <p>Lorem ipsum dolor sit amet consectetur. Tristique adipiscing sed ut donec feugiat lorem malesuada massa. Proin proin in sit varius viverra nulla. Bibendum eu volutpat adipiscing leo felis tellus.</p> 
                            <p>Et lorem at lectus aliquam quisque varius id id. Pretium cras elit molestie scelerisque fermentum morbi amet diam. Gravida dignissim egestas elementum ipsum arcu.</p>
                            <p>Et faucibus lorem pellentesque hendrerit in eros rutrum. Faucibus porttitor proin fusce eu.</p>
                            <p>Felis laoreet orci amet pharetra aliquam elit eu viverra nibh. Aliquam sed neque vel netus nisl vestibulum viverra ullamcorper ligula. Neque quis metus in odio diam aliquet pellentesque.</p>
                            <p>Consectetur nec scelerisque aliquam turpis pretium duis. Diam commodo sed in imperdiet. Ligula maecenas fringilla ipsum quis massa ultricies. Lectus eget velit ornare adipiscing sem vel. Pharetra.</p>
                        </div>
                        <Image
                        src='/shop-img.jpg'
                        alt='City Cyclery Shop'
                        width={500}
                        height={500}
                        className="rounded-xl"
                        ></Image>
                    </div>
                    <div className='grid lg:grid-cols-3 gap-x-6 gap-y-2 mb-4'>
                        <CardComponent
                            title='Since 2012'
                            description='Lorem ipsum dolor sit amet consectetur. Facilisis eget lorem leo nec. Ultricies leo tortor velit risus cursus. Ut fermentum in mauris interdum amet velit auctor.'
                        ></CardComponent>
                        <CardComponent
                            title='Bike Club'
                            description='Lorem ipsum dolor sit amet consectetur. Facilisis eget lorem leo nec. Ultricies leo tortor velit risus cursus. Ut fermentum in mauris interdum amet velit auctor.'
                        ></CardComponent>
                        <CardComponent
                            title='Drouillard Rd'
                            description='Lorem ipsum dolor sit amet consectetur. Facilisis eget lorem leo nec. Ultricies leo tortor velit risus cursus. Ut fermentum in mauris interdum amet velit auctor.'
                        ></CardComponent>
                    </div> 
                </div>
            </Layout>
        </>
    );
}