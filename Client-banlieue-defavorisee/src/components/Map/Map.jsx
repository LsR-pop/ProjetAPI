import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <div className="mb-6">
      <MapContainer
        style={{
          height: "70vh",
          width: "80vw",
          borderRadius: "25px",
        }}
        center={[48.866667, 2.333333]}
        zoom={12}
      >
        <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
        {data &&
          data.results.map((event) => (
            <Marker position={[event.lat, event.lon]} key={event.id}>
              <Popup>
                {event.title}
                <img src={event.cover_url} alt="" />
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}
