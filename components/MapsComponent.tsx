import { companyDetails } from '@/utils/company-details';
import { useLoadScript, GoogleMap, InfoWindowF } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import Image from 'next/image';

const Map = () => {
	const mapCenter = useMemo(() => ({ lat: 42.3216447, lng: -83.0000997 }), []);

	const mapOptions = useMemo<google.maps.MapOptions>(
		() => ({
			disableDefaultUI: true,
			scrollwheel: false,
			keyboardShortcuts: false,
			noClear: true,
			overviewMapControl: false,
			zoomControl: true,
			backgroundColor: 'bg-dark-500',
			zoomControlOptions: {
				position: 8.0,
			},
		}),
		[],
	);

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
	});

	if (!isLoaded) {
		return (
			<div className='text-center m-auto'>
				<p className='text-light-500 mt-44'>Loading map...</p>
			</div>
		);
	}
	
	return (
		<div className='flex m-auto w-full h-full relative'>
			<div className='absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none'></div>
			<GoogleMap
				options={mapOptions}
				zoom={19}
				center={mapCenter}
				mapTypeId={google.maps.MapTypeId.ROADMAP}
				mapContainerStyle={{ width: '2500px', height: '550px' }}
			>
				<InfoWindowF
				position={mapCenter}>
					<div className='container grid'>
						<div className='flex flex-row max-w-sm'>
							<Image src={companyDetails.logos.logomark.dark}
							alt='City Cyclery Logo'
							width={30}
							height={30}>
							</Image>
							<h4 className='text-dark-600 font-bold text-2xl'>City Cyclery</h4>
						</div>
						<div className='grid gap-2 m-auto pt-2'>
							<p className='text-dark-500'>{companyDetails.location.address}</p>
							<a href={companyDetails.location.mapsDirections} target='__blank' className='text-dark-500 hover:font-bold'>Get Directions</a>
						</div>
					</div>
				</InfoWindowF>
			</GoogleMap>
		</div>
	);
};
export default Map;
