import { Layout } from "@/components/Layout";
import { houseBrands, distBrands } from "@/utils/brands-data";
import { DistBrandComponent, HouseBrandComponent } from "@/components/BrandCardComponent";
import { Bicycle } from "phosphor-react";

export default function Brands() {
    return(
        <>
            <Layout
            title = 'Brands - City Cyclery'
            description=''
            >
            <div className="grid mt-16 max-w-5xl m-auto p-4 mb-4">
                <div className="flex flex-row gap-3 text-light-500 my-16 items-baseline">
                    <h1 className='font-bold text-4xl mb-4'>Brands</h1>
                    <Bicycle size={30} />
                </div>
                <h2 className="font-bold text-3xl text-light-500 mb-4">In House Brands</h2>
                <div className="grid gap-10">
                    {houseBrands.map((brand) => (
                        <HouseBrandComponent
                        title={brand.title}
                        image={brand.image}
                        url={brand.url}
                        description={brand.description}
                        key={brand.title}
                        ></HouseBrandComponent>
                    ))}
                </div>
                <h2 className="font-bold text-3xl text-light-500 mt-10 mb-4">Distribution Brands</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {distBrands.map((brand) => (
                        <DistBrandComponent
                        title={brand.title}
                        image={brand.image}
                        url={brand.url}
                        key={brand.title}
                        ></DistBrandComponent>
                    ))}
                </div>
            </div>
            </Layout>
        </>
    )
}