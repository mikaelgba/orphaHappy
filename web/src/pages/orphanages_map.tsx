import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import img_map_marker from '../images/local_marker.svg';
import { Map, TileLayer } from 'react-leaflet'; /*biblioteca para mapas no react*/
import '../styles/orphanages_map.css';
import 'leaflet/dist/leaflet.css'

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={img_map_marker} alt="OrphaHappy"/>
                    <h2>Selecione um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita!</p>
                </header>
                <footer>
                    <strong>Guarabira</strong>
                    <span>Paraiba - PB</span>
                </footer>
            </aside>
            <Map
                center = {[-6.8573035, -35.4938639]}
                zoom = {15}
                style = {{width:'100%', height:'100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/*<TileLayer 
                    url={'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}'} 
                /> */}
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="FFF"/>
            </Link>
        </div>    
    );
}
export default OrphanagesMap;