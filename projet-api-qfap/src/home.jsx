import SearchBar from "../src/components/SearchBar/index.jsx";
import Tag from "./components/Tag/index.jsx";
import Card from "./components/Card/index.jsx";

function Home() {
  return (
    <div>
      <div className="flex flex-row mt-24 mb-10 justify-center gap-24 ">
        <img src="./icons/IconLeft.png" alt="" />
        <div className="flex flex-col items-center gap-10">
          <img className="w-64 h-24" src="./icons/logoQFAP.svg" alt="" />
          <SearchBar />
        </div>
        <img src="./icons/IconLeft.png" alt="" />
      </div>
      <div className="flex flex-row justify-center gap-6 mb-12">
        <Tag></Tag>
        <Tag></Tag>
      </div>
      <h4 className="text-primary-blue font-medium text-xl text-right mr-32 mb-6">
        Tout voir
      </h4>
      <div className="flex flex-row">
        <div className="ml-14">Bonjour</div>
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
