import Tag from "../Tag";

function Card({ eventData }) {
  // Utilisation des données reçues via les props
  const { title, image, date } = eventData;

  return (
    <div className="flex flex-column">
      <div>
        <img
          className="w-78 h-96 mb-4 rounded-3xl border-solid border-8 border-primary-blue border-opacity-20"
          src={image} // Assurez-vous d'avoir une propriété image dans vos données d'événement
          alt=""
        />
        <div className="flex flex-col gap-4">
          <Tag></Tag>
          <div className="flex flex-col gap-0.5">
            <h2 className="text-xl text-textColor font-bold">
              {title} {/* Utilisation du titre de l'événement */}
            </h2>
            <div className="flex flex-row gap-2">
              <img src="icons/iconCalendar.svg" alt="" />
              <span className="text-sm text-secondaryRed font-medium">
                {date} {/* Utilisation de la date de l'événement */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
