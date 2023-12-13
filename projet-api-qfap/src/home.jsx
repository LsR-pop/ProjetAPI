import SearchBar from "../src/components/SearchBar/index.jsx";
import Tag from "./components/Tag/index.jsx";
import Card from "./components/Card/index.jsx";
import "./App.css";

function Home() {
  return (
    <div>
      <div className="flex flex-row container m-auto mt-24 mb-10 justify-center gap-24 ">
        {/* <img src="./icons/IconLeft.png" alt="" /> */}
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
            className="sm:w-4 md:w-8 lg:w-10 xl:w-12 self-end iconAnimate5"
            src="./icons/icon5.svg"
            alt=""
          />
          <img
            className="sm:w-4 md:w-8 lg:w-10 xl:w-12 self-center iconAnimate6"
            src="./icons/icon6.svg"
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
        <div>Bonjour</div>
        <div className="flex flex-row gap-12 flex-wrap ml-24 mb-12">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-6 mb-24">
        <Tag></Tag>
        <Tag></Tag>
      </div>
    </div>
  );
}

export default Home;
