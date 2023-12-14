import Tag from "../Tag";

function Card() {
  return (
    <div className="flex flex-column">
      <div>
        <img
          className="w-78 h-96 mb-4 rounded-3xl border-solid border-8 border-primary-blue border-opacity-20"
          src="images/testImg.jpg"
          alt=""
        />
        <div className="flex flex-col gap-4">
          <Tag></Tag>
          <div className="flex flex-col gap-0.5">
            <h2 className="text-xl text-textColor font-bold">
              Exposition Haussmann en capitale
            </h2>
            <div className="flex flex-row gap-2">
              <img src="icons/iconCalendar.svg" alt="" />
              <span className="text-sm text-secondaryRed font-medium">
                2 novembre - 31 décembre 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
