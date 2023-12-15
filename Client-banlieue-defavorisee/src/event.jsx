import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Card from "./components/Card/index";

import Footer from "./components/Footer/index.jsx";


function Event() {
  return (
    <div>

        <img src="icons/logoQFAP.svg" alt="" className="mt-12 mb-9 ml-32" />

      <div className="flex mb-24">
        <div className=" ml-32 ">
          <img
            className="w-100 h-100 rounded-3xl border-solid border-8 border-primary-blue border-opacity-20"
            src="images/testImg.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-column justify-around ml-14 mr-32">
          <div>
            <div className="flex flex-row gap-2 mb-4">
              <img src="icons/iconCalendar.svg" alt="" />
              <span className="text-sm text-secondaryRed font-medium">

                2 novembre - 31 décembre 2023

              </span>
            </div>
            <h2 className="text-5xl text-textColor font-medium mb-6">
              Exposition Haussmann en capitale
            </h2>
            <div className="flex gap-2 mb-6">
              <h3 className="text-base text-primary-blue font-bold font bg-primary-blue bg-opacity-10 text-center rounded-full py-2 px-8 w-28">
                Loisirs
              </h3>
              <img src="icons/twitter.svg" alt="" />
              <img src="icons/Facebook.svg" alt="" />
            </div>
            <div>
              <div className="flex gap-2 mb-6">
                <img src="icons/iPhone.svg" alt="" />
                <p className="font-regular font-medium text-textColor">
                  +33 07 65 65 12 67
                </p>
                <img src="icons/Outlined.svg" alt="" />
                <p className="font-regular font-medium text-textColor">
                  Malvoyant
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <a href="/" className="text-2xl text-primary-blue font-bold">
                Voir la billeterie
              </a>
              <img src="icons/Arrow-Right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="ml-32 mb-24 mr-96">
        <h2 className="mb-5 text-xl text-textColor font-medium">Description</h2>
        <p className="font-regular font-medium text-textColor">
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
      <div className="ml-32 mb-24 mr-32">
        <h2 className="mb-5 text-xl text-textColor font-medium">Endroit</h2>
        <MapContainer
          style={{
            height: "70vh",
            width: "80vw",
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
      <div className="ml-32 mr-32 mb-">
        <h2 className="mb-5 text-xl text-textColor font-medium">
          Programmes similaires
        </h2>
        <Card />
      </div>

      <Footer></Footer>

    </div>
  );
}

export default Event;
