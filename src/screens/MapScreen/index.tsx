import Layout from '@/components/Layout';
import { Box } from '@chakra-ui/react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';

export default function MapScreen() {
  useEffect(() => {
    mapboxgl.accessToken = process.env['NEXT_PUBLIC_MAP_BOX_KEY'] ?? '';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-68.137343, 45.137451], // starting position
      zoom: 5, // starting zoom
    });
    map.on('load', () => {
      // Add a data source containing GeoJSON data.
      map.addSource('maine', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {
                scalerank: 1,
                featurecla: 'Admin-0 country',
                labelrank: 4,
                sovereignt: 'Guyana',
                sov_a3: 'GUY',
                adm0_dif: 0,
                level: 2,
                type: 'Sovereign country',
                admin: 'Guyana',
                adm0_a3: 'GUY',
                geou_dif: 0,
                geounit: 'Guyana',
                gu_a3: 'GUY',
                su_dif: 0,
                subunit: 'Guyana',
                su_a3: 'GUY',
                brk_diff: 0,
                name: 'Guyana',
                name_long: 'Guyana',
                brk_a3: 'GUY',
                brk_name: 'Guyana',
                brk_group: null,
                abbrev: 'Guy.',
                postal: 'GY',
                formal_en: 'Co-operative Republic of Guyana',
                formal_fr: null,
                note_adm0: null,
                note_brk: null,
                name_sort: 'Guyana',
                name_alt: null,
                mapcolor7: 3,
                mapcolor8: 1,
                mapcolor9: 4,
                mapcolor13: 8,
                pop_est: 772298,
                gdp_md_est: 2966,
                pop_year: -99,
                lastcensus: 2002,
                gdp_year: -99,
                economy: '6. Developing region',
                income_grp: '4. Lower middle income',
                wikipedia: -99,
                fips_10: null,
                iso_a2: 'GY',
                iso_a3: 'GUY',
                iso_n3: '328',
                un_a3: '328',
                wb_a2: 'GY',
                wb_a3: 'GUY',
                woe_id: -99,
                adm0_a3_is: 'GUY',
                adm0_a3_us: 'GUY',
                adm0_a3_un: -99,
                adm0_a3_wb: -99,
                continent: 'South America',
                region_un: 'Americas',
                subregion: 'South America',
                region_wb: 'Latin America & Caribbean',
                name_len: 6,
                long_len: 6,
                abbrev_len: 4,
                tiny: -99,
                homepart: 1,
                filename: 'GUY.geojson',
              },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-59.758284878159195, 8.367034816924047],
                    [-59.101684129458654, 7.999201971870492],
                    [-58.482962205628056, 7.347691351750697],
                    [-58.45487606467743, 6.832787380394463],
                    [-58.07810319683737, 6.809093736188643],
                    [-57.542218593970645, 6.321268215353356],
                    [-57.14743648947688, 5.973149929219161],
                    [-57.307245856339506, 5.073566595882227],
                    [-57.91428890647214, 4.812626451024414],
                    [-57.86020952007869, 4.57680105226045],
                    [-58.04469438336068, 4.060863552258382],
                    [-57.60156897645786, 3.334654649260685],
                    [-57.2814334784097, 3.333491929534119],
                    [-57.150097825739905, 2.768926906745406],
                    [-56.539385748914555, 1.899522609866921],
                    [-56.78270423036083, 1.863710842288654],
                    [-57.335822923396904, 1.94853770589576],
                    [-57.66097103537737, 1.682584947105639],
                    [-58.11344987652502, 1.507195135907025],
                    [-58.42947709820596, 1.463941962078721],
                    [-58.5400129868783, 1.268088283692521],
                    [-59.03086157900265, 1.317697658692722],
                    [-59.64604366722126, 1.786893825686789],
                    [-59.71854570172674, 2.24963043864436],
                    [-59.97452490908456, 2.755232652188056],
                    [-59.81541317405786, 3.606498521332085],
                    [-59.53803992373123, 3.958802598481938],
                    [-59.767405768458715, 4.423502915866607],
                    [-60.11100236676737, 4.574966538914083],
                    [-59.98095862490488, 5.014061184098139],
                    [-60.21368343773133, 5.244486395687602],
                    [-60.73357418480372, 5.200277207861901],
                    [-61.410302903881956, 5.959068101419618],
                    [-61.13941504580795, 6.234296779806144],
                    [-61.15933631045648, 6.696077378766319],
                    [-60.54399919294098, 6.856584377464883],
                    [-60.29566809756239, 7.043911444522919],
                    [-60.637972785063766, 7.414999904810855],
                    [-60.55058793805819, 7.779602972846178],
                    [-59.758284878159195, 8.367034816924047],
                  ],
                ],
              },
            },
          ],
        },
      });

      // Add a new layer to visualize the polygon.
      map.addLayer({
        id: 'maine',
        type: 'fill',
        source: 'maine', // reference the data source
        layout: {},
        paint: {
          'fill-color': '#0080ff', // blue color fill
          'fill-opacity': 0.5,
        },
      });
      // Add a black outline around the polygon.
      map.addLayer({
        id: 'outline',
        type: 'line',
        source: 'maine',
        layout: {},
        paint: {
          'line-color': '#000',
          'line-width': 3,
        },
      });
    });
  }, []);

  return (
    <Layout>
      <Box mt="100rem">
        <div
          style={{
            position: 'absolute',
            top: 100,
            bottom: 0,
            width: '50%',
            height: '50%',
          }}
          id="map"
        ></div>
      </Box>
    </Layout>
  );
}
