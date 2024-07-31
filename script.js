mapboxgl.accessToken = 'pk.eyJ1IjoicnRheWxvcjg5NyIsImEiOiJjbHlvaHdoamswM29vMnFweTdwMzY4NW1uIn0.ftSWd0TTMneZ9ljViSd8Hw'; // Replace with your Mapbox access token


/*
######################################################################################################
                                                                                                     #
To add locations go to bottom of code, copy paste previous location, update longlat, name and link   #
don't touch the loops in here, does the thinking                                                     #
Robert Taylor                                                                                        #
rtaylor@iteris.com 3462240198                                                                        #
                                                                                                     #
######################################################################################################

*/
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/rtaylor897/clyohcrhd003801qn75it8j3p',
    center: [-99.03388, 38.82354], // Center the map near Kansas center of US
    zoom: 4.8
});

map.on('load', () => {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
        // TEXAS
        { 'type': 'Feature', 'properties': { 'description': 'City of McKinney (2007), TX', 'image': 'x-Preview Photos/mckinney.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20McKinney%20(2007),%20TX?csf=1&web=1&e=yewj7x' }, 'geometry': { 'type': 'Point', 'coordinates': [-96.639782, 33.197246] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Kileen (2024), TX', 'image': 'x-Preview Photos/killeen.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Killeen%20(2024),%20TX?csf=1&web=1&e=NjIAVc' }, 'geometry': { 'type': 'Point', 'coordinates': [-97.72909, 31.11590] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of College Station TOC (2016), TX', 'image': 'x-Preview Photos/college-station.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20College%20Station%20TOC%20(2016),%20TX?csf=1&web=1&e=ZDwv3l' }, 'geometry': { 'type': 'Point', 'coordinates': [-96.33342, 30.63389] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Corpus Cristi (2017), TX', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Corpus%20Christi%20(2017),%20TX?csf=1&web=1&e=XhoZ2Z', 'image': 'x-Preview Photos/corpus.JPG' }, 'geometry': { 'type': 'Point', 'coordinates': [-97.42534, 27.78591] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Fort Worth (2021), TX', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Fort%20Worth%20(2021),%20TX?csf=1&web=1&e=4dMQRk', 'image': 'x-Preview Photos/fortworth.JPeG' }, 'geometry': { 'type': 'Point', 'coordinates': [-97.33401, 32.74396] } },
        { 'type': 'Feature', 'properties': { 'description': 'TxDOT Beaumont (2023), TX', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/TxDOT%20Beaumont%20(2023),%20TX?csf=1&web=1&e=9Lpa2h', 'image': 'x-Preview Photos/beaumont.JPG' }, 'geometry': { 'type': 'Point', 'coordinates': [-94.12266, 30.07759] } },
        { 'type': 'Feature', 'properties': { 'description': 'TxDOT Abilene (2023), TX', 'image': 'x-Preview Photos/abilene.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/TxDOT%20Abilene%20(2023),%20TX?csf=1&web=1&e=8TcgQr'}, 'geometry': { 'type': 'Point', 'coordinates': [-99.73215, 32.44285] } },
        { 'type': 'Feature', 'properties': { 'description': 'TxDOT EOC Austin (2017), TX', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/TxDOT%20EOC%20Austin%20(2017),%20TX?csf=1&web=1&e=LG3akH', 'image': 'x-Preview Photos/austin.JPG' }, 'geometry': { 'type': 'Point', 'coordinates': [-97.74271, 30.27919] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Cedar Park (2018), TX', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Cedar%20Park%20(2018),%20TX?csf=1&web=1&e=MF5sv1', 'image': 'x-Preview Photos/cedarpark.JPG' }, 'geometry': { 'type': 'Point', 'coordinates': [-97.63476,30.49360] } },
        { 'type': 'Feature', 'properties': { 'description': 'TxDOT Lab Cedar Park (2016), TX', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/TxDOT%20Lab%20Cedar%20Park%20(2016),%20TX?csf=1&web=1&e=Eh6MzZ', 'image': 'x-Preview Photos/lab.JPG' }, 'geometry': { 'type': 'Point', 'coordinates': [-97.85763, 30.51279] } },
        { 'type': 'Feature', 'properties': { 'description': 'College Station Signal Shop(2018), TX', 'image': 'x-Preview Photos/cstatshop.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20College%20Station%20Signal%20Shop%20(2018),%20TX?csf=1&web=1&e=EJgF0o' }, 'geometry': { 'type': 'Point', 'coordinates': [-96.41826, 30.73075] } },
        { 'type': 'Feature', 'properties': { 'description': 'Cedar Park Water Treatment Plant (2017), TX', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Cedar%20Park%20Water%20Treatment%20Plant%20(2017),TX?csf=1&web=1&e=HxWb1t', 'image': 'x-Preview Photos/water.JPG' }, 'geometry': { 'type': 'Point', 'coordinates': [-97.66703,30.66682] } },


        // CALIFORNIA
        { 'type': 'Feature', 'properties': { 'description': 'City of Glendale (2021), CA', 'image': 'x-Preview Photos/glendale.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Glendale%20(2021),%20CA?csf=1&web=1&e=93gzWA'}, 'geometry': { 'type': 'Point', 'coordinates': [-118.25404, 34.17094] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Inglewood (2024), CA', 'image': 'x-Preview Photos/inglewood.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Inglewood%20(2024),%20CA?csf=1&web=1&e=kptNmW'}, 'geometry': { 'type': 'Point', 'coordinates': [-118.34398, 33.94958] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Santa Clara TOC (2015), CA', 'image': 'x-Preview Photos/santa-clara.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Santa%20Clara%20TOC%20(2015),%20CA?csf=1&web=1&e=oEJtIn' }, 'geometry': { 'type': 'Point', 'coordinates': [-121.96667, 37.36807] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Long Beach (2014), CA', 'image': 'x-Preview Photos/long-beach.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Long%20Beach%20(2014),%20CA?csf=1&web=1&e=70VYhe' }, 'geometry': { 'type': 'Point', 'coordinates': [-118.17198, 33.76521] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Sacramento (2014), CA', 'image': 'x-Preview Photos/sacramento.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Sacramento%20(2014),%20CA?csf=1&web=1&e=xkAZwM' }, 'geometry': { 'type': 'Point', 'coordinates': [-121.48511, 38.56974] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Oxnard (2013), CA', 'image': 'x-Preview Photos/oxnard.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Oxnard%20(2013),%20CA?csf=1&web=1&e=0f41dc' }, 'geometry': { 'type': 'Point', 'coordinates': [-119.18615, 34.17822] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Culver City (2011), CA', 'image': 'x-Preview Photos/culver-city.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Culver%20City%20(2011),%20CA?csf=1&web=1&e=VW85xm' }, 'geometry': { 'type': 'Point', 'coordinates': [-118.39763, 34.00745] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Corona (2021), CA', 'image': 'x-Preview Photos/corona.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Corona%20(2021),%20CA?csf=1&web=1&e=tgWOqN' }, 'geometry': { 'type': 'Point', 'coordinates': [-117.57603, 33.85439] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Westminster (2010), CA', 'image': 'x-Preview Photos/westminster.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Westminister%20(2010),%20CA?csf=1&web=1&e=a7w2Kj' }, 'geometry': { 'type': 'Point', 'coordinates': [-117.99749, 33.75221] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Fountain Valley (2015), CA', 'image': 'x-Preview Photos/fountain-valley.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Fountain%20Valley%20(2015),%20CA?csf=1&web=1&e=gPNUAd' }, 'geometry': { 'type': 'Point', 'coordinates': [-117.94406, 33.70861] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of San Leandro (2019), CA', 'image': 'x-Preview Photos/san-leandro.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20San%20Leandro%20(2019),%20CA?csf=1&web=1&e=sm1s7Q' }, 'geometry': { 'type': 'Point', 'coordinates': [-122.15412, 37.71493] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Fontana (2007), CA', 'image': 'x-Preview Photos/fontana.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Fontana%20(2007),%20CA?csf=1&web=1&e=zZfvxX' }, 'geometry': { 'type': 'Point', 'coordinates': [-117.44429, 34.10493] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Cypress (2014), CA', 'image': 'x-Preview Photos/cypress.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Cypress%20(2014),%20CA?csf=1&web=1&e=uujYno' }, 'geometry': { 'type': 'Point', 'coordinates': [-118.03587, 33.81605] } },
        { 'type': 'Feature', 'properties': { 'description': 'Sacramento County (2011), CA', 'image': 'x-Preview Photos/sacramento-county.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/Sacramento%20County%20(2011),%20CA?csf=1&web=1&e=b2wvfa' }, 'geometry': { 'type': 'Point', 'coordinates': [-121.20236,38.54045] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Santa Ana (Iteris TMC), CA', 'image': 'x-Preview Photos/santa-ana.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Santa%20Ana%20(Iteris%20TMC),%20CA?csf=1&web=1&e=1GRcRc' }, 'geometry': { 'type': 'Point', 'coordinates': [-117.86981,33.73696] } },

        // OTHER STATES
        { 'type': 'Feature', 'properties': { 'description': 'City of Lincol (2018), NE',  'image': 'x-Preview Photos/Lincoln.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Lincoln%20(2018),%20NE?csf=1&web=1&e=Hds3B1' }, 'geometry': { 'type': 'Point', 'coordinates': [-96.79996,40.70535] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Lincoln Parking Control Center (2019)',  'image': 'x-Preview Photos/UN.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/Lincoln%20Parking%20Control%20Center,%20NE?csf=1&web=1&e=m4Mhbp' }, 'geometry': { 'type': 'Point', 'coordinates': [-96.70055, 40.82007] } },
        { 'type': 'Feature', 'properties': { 'description': 'University of Michigan Mcity (2017), MI', 'image': 'x-Preview Photos/ann-arbor.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/University%20of%20Michigan%20Mcity%20(2017),%20MI?csf=1&web=1&e=bvNtEC' }, 'geometry': { 'type': 'Point', 'coordinates': [-83.70602, 42.29917] } },
        { 'type': 'Feature', 'properties': { 'description': 'ADA County Highway District (2013), IA', 'image': 'x-Preview Photos/boise.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/ADA%20County%20Highway%20District%20(2013),%20IA?csf=1&web=1&e=Yac2M3'}, 'geometry': { 'type': 'Point', 'coordinates': [-116.22164, 43.59579] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Grand Rapids (2012), MI', 'image': 'x-Preview Photos/grand-rapids.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Grand%20Rapids%20(2012),%20MI?csf=1&web=1&e=i7XjHp' }, 'geometry': { 'type': 'Point', 'coordinates': [-85.66455, 42.95882] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Omaha (2015), NE', 'image': 'x-Preview Photos/omaha.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Omaha%20(2015),%20NE?csf=1&web=1&e=YRsECK'}, 'geometry': { 'type': 'Point', 'coordinates': [-95.93965, 41.25408] } },
        { 'type': 'Feature', 'properties': { 'description': 'Marion County (2019), FL', 'image': 'x-Preview Photos/marion-county.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/Marion%20County%20(2019),%20FL?csf=1&web=1&e=8uVVeA'}, 'geometry': { 'type': 'Point', 'coordinates': [-82.12549, 29.18911] } },
        { 'type': 'Feature', 'properties': { 'description': 'City of Naples (2017), FL', 'image': 'x-Preview Photos/Naples.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/City%20of%20Naples%20(2017),%20FL?csf=1&web=1&e=lIGuRD'}, 'geometry': { 'type': 'Point', 'coordinates': [-81.79725,26.15153] } },
        { 'type': 'Feature', 'properties': { 'description': 'University of Lincoln Nebrask TMC Lab (2013), NE',  'image': 'x-Preview Photos/UNLTMC.jpg', 'url': 'https://iterisinc1.sharepoint.com/:f:/r/sites/Systems-Austin/Texas%20Marketing/TMC%20Portfolio%20Map/University%20of%20Lincoln%20Nebrask%20TMC%20Lab%20(2013),%20NE?csf=1&web=1&e=6a2IDC' }, 'geometry': { 'type': 'Point', 'coordinates': [-96.81863,40.80224] } },

    ]
}
    });

    // Add a layer showing the places.
    map.addLayer({
        'id': 'places',
        'type': 'circle',
        'source': 'places',
        'paint': {
            'circle-color': ['case',
                ['boolean', ['feature-state', 'hover'], false], '#ffa500', // Orange for hovered markers
                ['has', 'url'], '#47e3ff', // Blue for markers with URLs
                '#ff0000' // Red for markers without URLs
            ],
            'circle-radius': 7,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });

    // Create a popup, but don't add it to the map yet.
    const popup = new mapboxgl.Popup({ offset: 25 });

    let hoveredFeatureId = null;

    map.on('click', 'places', (e) => {
        const url = e.features[0].properties.url;
        if (url) {
            window.open(url, '_blank');
        }
    });

    map.on('mouseenter', 'places', (e) => {
        map.getCanvas().style.cursor = 'pointer';

        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;
        const image = e.features[0].properties.image;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        if (['mercator', 'equirectangular'].includes(map.getProjection().name)) {
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
        }

        // Set feature state to update the circle color
        if (e.features.length > 0) {
            if (hoveredFeatureId !== null) {
                map.setFeatureState(
                    { source: 'places', id: hoveredFeatureId },
                    { hover: false }
                );
            }
            hoveredFeatureId = e.features[0].id;
            map.setFeatureState(
                { source: 'places', id: hoveredFeatureId },
                { hover: true }
            );
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(`
            <h3>${description}</h3>
            <img src="${image}" alt="${description}" style="width: 600px; height: auto;">
        `).addTo(map);
    });

    map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';

        // Reset feature state
        if (hoveredFeatureId !== null) {
            map.setFeatureState(
                { source: 'places', id: hoveredFeatureId },
                { hover: false }
            );
        }
        hoveredFeatureId = null;

        popup.remove();
    });
});