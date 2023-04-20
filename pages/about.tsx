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
                            <p>The City Cyclery's modest beginnings were first established by a few local 'vintage bike nerds'.</p> 
                            <p>initially, when a few friends figured out they were all secretly vintage bike nerds, Chris Holt came up with the idead of starting a Wheelman Club, the like 'olde' days of cycling and they quickly filled up his garage with vintage rusty bikes.</p>
                            <p>Chris, along with Andrew Foot and Ron Drouillard, started 'aoldbikes.ca' and posted a few of their restorations online- initially just to show off- but very soon, people were interested in buying the newly restored bicycles.</p>
                            <p>From this, Ron rented a small 500 square space in a alley off of Chilver Rc in Walkerville.</p>
                            <p>This was originally a clubhouse for the Wheelman Club, but it quickly evolved into something much bigger.</p>
                            <p>Chris and Ron established the City Cyclery and were fortunate to quickly employ Mike Beauchamp as the head mechanic.</p>
                            <p>Over the last 10-12 years, the City Cyclery has been on the move and experienced some changes.</p>
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
                            description='Chris and Ron brought on Stephen Hargreaves as a partner, and they went on to establish the City Cyclery in a historic building they completely renovated back to its original glory on Lincoln Rd.'
                        ></CardComponent>
                        <CardComponent
                            title='In 2017'
                            description='Ron made the decision to pass the business along as the building was being sold. In comes Ben Baillargeon, a mechanic at City Cyclery for many years. Ron sold the business to Ben and the shops new location was decided. The City Cyclery moved to Erie St where they loved for 6 years.'
                        ></CardComponent>
                        <CardComponent
                            title='Drouillard Rd'
                            description='At the end of 2020, Ben, along with Thad Renaud and Mike Underwood (also owners of the shop), decided to move locations again. For the past 3 year, City Cyclery has called Drouillard Rd home. They hope to continue to grow as a business here in this community.'
                        ></CardComponent>
                    </div> 
                </div>
            </Layout>
        </>
    );
}