import { react, useState, useEffect } from 'react';

const useGeolocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { long: "", lat:"" },
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                long: location.coords.longitude,
            }
        });
    }


    const onError = () => {
        setLocation({
            loaded: true,
            error,
        })
    };

    useEffect(() => {
        if (!(geolocation in navigator)) {
            setLocation((state) => ({
                ...state,
                loaded: true,
                error: {
                    code: 0,
                    message: "Geolocation is not supported"
                },
            }));
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);
    return location;
}
export default useGeolocation;
