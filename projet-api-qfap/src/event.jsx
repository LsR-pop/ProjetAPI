import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Event() {
  return (
    <div>
      <div>
        <img />
      </div>
      <div>
        <img />
        <div>
          <p>date</p>
          <h1>titre event</h1>
          <div>
            <button>Loisirs</button>
            <button>logotwitter</button>
            <button>logofacebook</button>
          </div>
          <div>
            <p>+33 07 65 65 12 67</p>
            <p>Malvoyant</p>
          </div>
          <a href=""></a>
        </div>
      </div>
      <div>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
      <div>
        <h2>Endroit</h2>
        <MapContainer
          style={{
            height: "515px",
            width: "1044px",
            borderRadius: "25px",
          }}
          center={[48.866667, 2.333333]}
          zoom={12}
        >
          {/* add google map tile url  */}
          <TileLayer
            attribution="Google Maps"
            url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          />
        </MapContainer>
      </div>
      <div>
        <h2>Programmes similaires</h2>
      </div>
    </div>
  );
}

export default Event;
