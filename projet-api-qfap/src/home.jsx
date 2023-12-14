import SearchBar from "../src/components/SearchBar/index.jsx";
import Tag from "./components/Tag/index.jsx";
import Card from "./components/Card/index.jsx";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";

import { Collapse, Checkbox } from "antd";

function Home() {
  const { Panel } = Collapse;
  const accordionStyle = {
    border: "none",
    boxShadow: "none",
  };
  const customPanelStyle = {
    border: 0,
    boxShadow: "none",
  };
  const checkboxStyle = {
    color: "#354ACE",
    marginBottom: "8px",
  };

  return (
    <div>
      <img src="icons/logoQFAP.svg" alt="" className="mt-12 mb-9 ml-32" />
      <div className="flex flex-row container m-auto mt-24 mb-10 justify-center gap-24 ">
        <div className="flex flex-col w-1/3">
          <img
            className="sm:w-4 md:w-8 lg:w-10 xl:w-12 iconAnimate"
            src="./icons/icon1.svg"
            alt=""
          />
          <img
            className="sm:w-4 md:w-8 lg:w-10 xl:w-12 self-end iconAnimate2"
            src="./icons/icon2.svg"
            alt=""
          />
          <img
            className="sm:w-4 md:w-8 lg:w-10 xl:w-12 self-center iconAnimate3"
            src="./icons/icon3.svg"
            alt=""
          />
          <img
            className="sm:w-4 md:w-8 lg:w-10 xl:w-12 iconAnimate4"
            src="./icons/icon4.svg"
            alt=""
          />
          <img
            className="sm:w-4 xl:w-12 self-end iconAnimate5"
            src="./icons/icon5.svg"
            alt=""
          />
          <img
            className="sm:w-4 md:w-8 lg:w-10 xl:w-12 self-center iconAnimate6"
            src="./icons/icon6.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center gap-10">
          <img className="w-64 h-24" src="./icons/logoQFAP.svg" alt="" />
          <SearchBar />
        </div>
        <div className="flex flex-col w-1/3">
          <img
            className="sm:w-4 md:w-8 lg:w-10 xl:w-12 self-start iconAnimate"
            src="./icons/icon7.svg"
            alt=""
          />
          <img
            className="sm:w-4 md:w-8 lg:w-10 xl:w-12 self-end  iconAnimate2"
            src="./icons/icon8.svg"
            alt=""
          />
          <img
            className="sm:w-4 md:w-8 lg:w-10 xl:w-12 self-center iconAnimate3"
            src="./icons/icon9.svg"
            alt=""
          />
          <img
            className="sm:w-4 md:w-8 lg:w-10 xl:w-12 iconAnimate4"
            src="./icons/icon10.svg"
            alt=""
          />
          <img
            className="sm:w-4 md:w-8 lg:w-10 xl:w-12 iconAnimate5"
            src="./icons/icon11.svg"
            alt=""
          />
          <img
            className="sm:w-4 md:w-8 lg:w-10 xl:w-12 self-end  iconAnimate6"
            src="./icons/icon12.svg"
            alt=""
          />

          <img
            className="sm:w-4 md:w-8 lg:w-10 xl:w-12 self-center iconAnimate6"
            src="./icons/icon13.svg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-6 mb-12">
        <Tag></Tag>
        <Tag></Tag>
      </div>
      <h4 className="text-primary-blue font-medium text-xl text-right mr-32 mb-6">
        Tout voir
      </h4>
      <div className="flex flex-row">
        <div className="ml-5 xl:w-[200px] sm:w-[100px] md:w-[150px]">
          <Collapse accordion expandIconPosition="right" style={accordionStyle}>
            <Panel
              style={customPanelStyle}
              header="Mot clés"
              key="1"
              className="text-xl text-textColor font-medium"
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Checkbox
                  style={checkboxStyle}
                  className="font-regular font-medium text-base custom-checkbox"
                >
                  <span className="custom-checkmark"></span>
                  Option 1
                </Checkbox>
                <Checkbox
                  style={checkboxStyle}
                  className="font-regular font-medium text-base custom-checkbox"
                >
                  <span className="custom-checkmark"></span>
                  Option 2
                </Checkbox>
              </div>
            </Panel>
          </Collapse>
        </div>
        <div>
          <div className="flex flex-row gap-12 flex-wrap ml-24 mb-12">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className="flex flex-row justify-center gap-6 mb-24">
            <Tag></Tag>
            <Tag></Tag>
          </div>
          <div className="mb-6">
            <MapContainer
              style={{
                height: "515px",
                width: "1044px",
                borderRadius: "25px",
              }}
              center={[48.866667, 2.333333]}
              zoom={12}
            >
              <TileLayer
                attribution="Google Maps"
                url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
              />
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
