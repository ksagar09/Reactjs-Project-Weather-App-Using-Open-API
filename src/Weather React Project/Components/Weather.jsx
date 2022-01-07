import react from 'react';
import { useState, useEffect } from 'react';
import '../Css/Style.css';
import useGeolocation from './Geolocation.jsx'
// import '../Css/style_thapa.css';

// import { hot } from 'react-hot-loader/root';

const Weather = () => {
    const [city, setCity] = useState(null)
    // Pune current value
    //city initial value
    // useCity updated value

    // To display searched data
    const [search, setSearch] = useState('mumbai');
    const location = useGeolocation();
    
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=36977b9c6f8c8d7e8c41ad596d78238a`;
            const responce = await fetch(url);
            const JsonResponce = await responce.json()
            // console.log(JsonResponce);
            setCity(JsonResponce.main)
        };
        fetchApi();
    }, [search])
    // const CurrLoc= navigator.geolocation.getCurrentPosition(function(position) {
    //     console.log(position)
    //   });
    
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="Search"
                        className="inputField"
                        value={search}
                        onChange={(event) => { setSearch(event.target.value) }} //it will target or look for for every search keyword and update to setSearch
                    /> 
                </div>

                {!city ? (<p> City Not Found </p>) :
                    (
                        <div>
                            <div className="info">
                                <h2 className="location">
                                    <i className="fa fa-street-view" aria-hidden="true"></i>
                                    {search}°C
                                </h2>
                                <h1 className="temp">
                                    {city.temp} °C
                                </h1>
                                <h3 className='tempmin_max'>Feels Like: {city.feels_like}°C</h3>
                                <h3 className='tempmin_max'>Min: {city.temp_min} °C | Max: {city.temp_max} °C</h3>
                            </div>
                        </div>
                    )}
            </div>
        </>
    )
}
export default Weather;