import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const trips = [
  {
    id: 1,
    title: "Ten-X Campground",
    date: "2025-06-19",
    location: "Grand Canyon South Rim",
    lat: 35.974,
    lng: -112.124,
    notes: "Moto camped. Quiet pines, lots of shade.",
  },
  {
    id: 2,
    title: "Rock Crossing Campground",
    date: "2025-06-25",
    location: "Pine, AZ",
    lat: 34.398,
    lng: -111.259,
    notes: "Solo camp. Clear skies. Great stars.",
  },
];

export default function CampingTrips() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">🗺️ Camping Trips</h1>
      <MapContainer
        center={[34.7, -111.9]} // Initial view center
        zoom={7}
        scrollWheelZoom={true}
        className="h-[500px] w-full rounded-xl shadow"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
        {trips.map((trip) => (
          <Marker key={trip.id} position={[trip.lat, trip.lng]}>
            <Popup>
              <strong>{trip.title}</strong><br />
              {trip.date}<br />
              <em>{trip.location}</em><br />
              {trip.notes}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
