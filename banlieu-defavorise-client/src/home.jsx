import SearchBar from "./components/SearchBar/index.jsx";
import Tag from "./components/Tag/index.jsx";
import Tag2 from "./components/Tag2/index.jsx";
import Card from "./components/Card/index.jsx";
import Filter from "./components/Filter/filter.jsx";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/index.jsx";

function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  const showRecentEvents = () => {
    const sortedEvents = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setData(sortedEvents);
  };

  return (
    <div>
      <a href="/">
        <img src="icons/logoQFAP.svg" alt="" className="mt-12 mb-9 ml-32" />
      </a>
      <div className="flex flex-row container m-auto mt-24 mb-10 justify-center gap-24 ">
        {/* <img src="./icons/IconLeft.png" alt="" /> */}
        <div className="flex flex-col w-1/3">
          <img
            className="sm:w-6 md:w-8 lg:w-10 xl:w-12 iconAnimate"
            src="./icons/icon1.svg"
            alt=""
          />
          <img
            className="sm:w-6 md:w-8 lg:w-10 xl:w-12 self-end iconAnimate2"
            src="./icons/icon2.svg"
            alt=""
          />
          <img
            className="sm:w-6 md:w-8 lg:w-10 xl:w-12 self-center iconAnimate3"
            src="./icons/icon3.svg"
            alt=""
          />
          <img
            className="sm:w-6 md:w-8 lg:w-10 xl:w-12 iconAnimate4"
            src="./icons/icon4.svg"
            alt=""
          />
          <img
            className="sm:w-6 md:w-8 lg:w-10 xl:w-12 self-end iconAnimate5"
            src="./icons/icon5.svg"
            alt=""
          />
          <img
            className="sm:w-6 md:w-8 lg:w-10 xl:w-12 self-center iconAnimate6"
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
            className="sm:w-6 md:w-8 lg:w-10 xl:w-12 self-start iconAnimate"
            src="./icons/icon7.svg"
            alt=""
          />
          <img
            className="sm:w-6 md:w-8 lg:w-10 xl:w-12 self-end  iconAnimate2"
            src="./icons/icon8.svg"
            alt=""
          />
          <img
            className="sm:w-6 md:w-8 lg:w-10 xl:w-12 self-center iconAnimate3"
            src="./icons/icon9.svg"
            alt=""
          />
          <img
            className="sm:w-6 md:w-8 lg:w-10 xl:w-12 iconAnimate4"
            src="./icons/icon10.svg"
            alt=""
          />
          <img
            className="sm:w-6 md:w-8 lg:w-10 xl:w-12 iconAnimate5"
            src="./icons/icon11.svg"
            alt=""
          />
          <img
            className="sm:w-6 md:w-8 lg:w-10 xl:w-12 self-end  iconAnimate6"
            src="./icons/icon12.svg"
            alt=""
          />

          <img
            className="sm:w-6 md:w-8 lg:w-10 xl:w-12 self-center iconAnimate6"
            src="./icons/icon13.svg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-6 mb-12">
        <Tag onClick={showRecentEvents}></Tag>
        <Tag2></Tag2>
      </div>
      <h4 className="text-primary-blue font-medium text-xl text-right mr-32 mb-6">
        Tout voir
      </h4>
      <div className="flex flex-row">
        <div>
          <h2 className="text-5xl text-textColor font-medium mb-6 ml-5">
            Filtres
          </h2>
          <Filter />
        </div>
        <div>
          <div className="flex flex-row gap-12 flex-wrap ml-24 mb-12">
            {data &&
              data.results.map((event) => {
                return <Card key={event.id} eventData={event} />;
              })}
          </div>
          {/* <div className="flex flex-row justify-center gap-6 mb-24">
            <Tag></Tag>
            <Tag></Tag>
          </div> */}
          <h2 className="text-5xl text-textColor font-medium mb-6">
            Carte de Paris
          </h2>
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
            </MapContainer>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
