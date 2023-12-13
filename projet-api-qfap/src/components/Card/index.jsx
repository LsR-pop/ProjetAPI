function Card() {
  return (
    <div className="flex flex-column justify-around m-auto">
      <div>
        <img
          className="w-78 h-96 mb-4 rounded-3xl border-solid border-8 border-primary-blue border-opacity-20"
          src="images/testImg.jpg"
          alt=""
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-base text-primary-blue font-bold font bg-primary-blue bg-opacity-10 text-center rounded-full py-2 px-8 w-28">
            Loisirs
          </h3>
          <div className="flex flex-col gap-0.5">
            <h2 className="text-xl text-textColor font-medium">
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
