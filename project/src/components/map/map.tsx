import {useRef, useEffect} from 'react';
import leaflet, {LayerGroup, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {Offer} from '../../types/offer';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
  activeOffer: Offer | null;
};

function Map(props: MapProps): JSX.Element {
  const {offers, activeOffer} = props;

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);

  const markerGroup = new LayerGroup();

  const center = {
    lat: offers[0].city.location.latitude,
    lng: offers[0].city.location.longitude,
  };


  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        },
        {icon: (offer.id === activeOffer?.id)
          ? currentCustomIcon
          : defaultCustomIcon,
        });
        marker.addTo(markerGroup);
      });
      markerGroup.addTo(map);
    }
    return () => {markerGroup.remove();};
  }, [map, offers, activeOffer]);

  useEffect(() => {
    map?.setView(center);
  }, [center, map]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
