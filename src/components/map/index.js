import GoogleMapReact from "google-map-react";
import './styles.css';
import Marker from "../marker";
import {useSelector} from 'react-redux';

const Map = ({ petshops }) =>{

    const {mapCenter} = useSelector((state) => state.shop);

    return(
        <div className="container-map">
            <GoogleMapReact bootstrapURLKeys={{key:"AIzaSyBDkilmaOqZxl_xYhHoS2mfu3djhs5eQ74"}} center={mapCenter} defaultZoom={15} yesIWantToUseGoogleMapApiInternals>
                {petshops.map(p => <Marker petshop={p} lat={p.location.lat} lng={p.location.lng} />)}
            </GoogleMapReact>
        </div>
    );
}

export default Map;