import "./App.css";
import {
  MapContainer,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  return <div className="App">
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MapContainer
        style={{
          height: "515px",
          width: "1044px",
          borderRadius: "25px"
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
  </div>;  
}

export default App;
