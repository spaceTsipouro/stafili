import React from 'react';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Polygon from 'ol/geom/Polygon.js';
import Draw, {createRegularPolygon, createBox} from 'ol/interaction/Draw.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';


export class MapComponent extends React.Component {
  constructor() {
    super();
    this.onMapClick = this.onMapClick.bind(this);
    this.onDrawend = this.onDrawend.bind(this);
  }

  onMapClick () {

  }

  onDrawend(event) {

  }

  componentDidMount() {
    const raster = new TileLayer({ source: new OSM() });
    const source = new VectorSource({ wrapX: false });
    const vector = new VectorLayer({ source: source });

    const map = new Map({
      layers: [ raster, vector ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 4
      })
    });

    const draw = new Draw({
      source: source,
      type: 'Square',
      geometryFunction: createRegularPolygon(4, Math.PI/4)
    });
    map.addInteraction(draw);

  }

  render() {
    return(
      <section className="panel-map">
          <div id="map" className="map" ref="olmap"></div>
      </section>
    );
  }
}
