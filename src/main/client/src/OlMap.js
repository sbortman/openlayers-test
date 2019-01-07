import React,{ Component } from "react"

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {defaults as defaultControls, ScaleLine} from 'ol/control.js';
import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';
import 'ol/ol.css'

class OlMap extends Component
{
    getOpenlayersConfig = () => {
        return fetch('http://localhost:8080/olconfig')
            .then(function(response) {
               return response.json();
             })
            .then(json => {
//                console.log('json', json)
                return json;
            })
            .catch(error => console.error(`Something bad happened: ${error}`));

    }

//    getOpenlayersConfig2 = async () => {
//
//        const response = await fetch('http://localhost:8080/olconfig');
//        const json = await response.json();
//        console.log('test', json);
//        return json;
//
//    }

    initMap = params => {
//        const test = this.getOpenlayersConfig2();
//        console.log('test', test);

        this.getOpenlayersConfig().then( openlayersConfig => {

            console.log('openlayersConfig', openlayersConfig);

            const layers = openlayersConfig.baseMaps.map( (i) => {
                return new TileLayer({
                  source: new TileWMS({
                    url: i.url,
                    params: i.params,
                    options: i.options
                  })
                })
            } ) ;



            const map = new Map({
                controls: defaultControls().extend([
                  new ScaleLine({
                    units: 'degrees'
                  })
                ]),
                layers: layers,
                target: 'map',
                view: new View({
                  projection: 'EPSG:4326',
                  center: [0, 0],
                  zoom: 2
                })
            });
        } );
    }

    componentDidMount() {
        this.initMap();
    }

    render() {
        return ( <div id='map'/> );
    }
}

export default OlMap;