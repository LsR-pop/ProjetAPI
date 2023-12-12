function Card() {
  return (
    <div className="flex flex-column justify-around w-40 m-auto">
      <h3 className="text-base text-primary-blue font-bold bg-blue-600 bg-opacity-30 p-1 px-3 rounded-full">
        Loisirs
      </h3>
      <h2 className="text-red">Exposition Haussmann en capitale</h2>
      <div className="flex flex-column m-auto">
        <img src="src/icons/iconCalendar" alt="" />
        <span>2 novembre - 31 décembre 2023</span>
      </div>
    </div>
  );
}

export default Card;
