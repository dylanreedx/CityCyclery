import { Layout } from "@/components/Layout";
import { houseBrands, distBrands } from "@/utils/brands-data";
import { DistBrandComponent, HouseBrandComponent } from "@/components/BrandCardComponent";

export default function Brands() {
    return(
        <>
            <Layout
            title = 'Brands - City Cyclery'
            description=''
            >
            <div className="grid mt-16 max-w-5xl m-auto p-4 mb-4">
                <h1 className='font-bold text-4xl text-light-500 my-16 mb-4'>Brands</h1>
                <h2 className="font-bold text-3xl text-light-500 mt-10 mb-4">In House</h2>
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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