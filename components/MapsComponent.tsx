import { companyDetails } from "@/utils/company-details";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from 'react';

const Map = () => {
    const mapCenter = useMemo(
        () => ({lat: 42.3216447, lng: -83.0000997}),
        []
    );
    
    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: true,
            scrollwheel: false,
            keyboardShortcuts: false,
            noClear: true,
            overviewMapControl: false,
            zoomControl: true,
            backgroundColor: 'bg-dark-500',
        }),
        []
    );

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string
    });
    
    if(!isLoaded) {
        return(
            <div className="text-center m-auto">
                <p className="text-light-500 mt-44">Loading map...</p>
            </div>
        )
    }

    return (
        <div className="flex m-auto w-full h-full">
            <GoogleMap
                options={mapOptions}
                zoom={20}
                center={mapCenter}
                mapTypeId={google.maps.MapTypeId.ROADMAP}
                mapContainerStyle={{ width: '1900px', height: '550px'}}
            >
            </GoogleMap>
        </div>
    )
}
export default Map