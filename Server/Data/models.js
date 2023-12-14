const { readFileSync } = require("fs");
const { Sequelize, DataTypes, Model } = require("sequelize");

const raw = readFileSync(
  "/Users/leobckt/Desktop/Dev/B3/ProjetAPI/Server/Data/que-faire-a-paris.json"
);

let data = JSON.parse(raw);

// connexion à la base de données
const sequelize = new Sequelize(
  "banlieu-defavorise_qfap",
  "339741",
  "QFAPesd2023!",
  {
    host: "mysql-banlieu-defavorise.alwaysdata.net",
    dialect: "mariadb",
    logging: false,
  }
);

class Event extends Model {}
class Tag extends Model {}
class EventTag extends Model {}
class AccessType extends Model {}
class PriceType extends Model {}
class Audience extends Model {}
class Group extends Model {}
class Address extends Model {}

AccessType.init(
  // Définition du modèle de la table AccessType
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    access_type: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  // Configuration du modèle AccessType
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    modelName: "AccessType",
    tableName: "access_types", // Nom de la table dans la base de données
  }
);

PriceType.init(
  // Définition du modèle de la table PriceType
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price_type: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  // Configuration du modèle PriceType
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    modelName: "PriceType",
    tableName: "price_types", // Nom de la table dans la base de données
  }
);

Audience.init(
  // Définition du modèle de la table Audience
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    audience: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  // Configuration du modèle Audience
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    modelName: "Audience",
    tableName: "audiences", // Nom de la table dans la base de données
  }
);

Group.init(
  // Définition du modèle de la table Group
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    group: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  // Configuration du modèle Group
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    modelName: "Group",
    tableName: "groups", // Nom de la table dans la base de données
  }
);

Address.init(
  // Définition du modèle de la table Address
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address_name: {
      type: DataTypes.STRING,
      unique: true,
    },
    address_street: {
      type: DataTypes.STRING,
    },
    address_zipcode: {
      type: DataTypes.STRING,
    },
    address_city: {
      type: DataTypes.STRING,
    },
    lat: {
      type: DataTypes.FLOAT,
    },
    lon: {
      type: DataTypes.FLOAT,
    },
    contact_url: {
      type: DataTypes.STRING,
    },
    contact_phone: {
      type: DataTypes.STRING,
    },
    contact_mail: {
      type: DataTypes.STRING,
    },
    contact_facebook: {
      type: DataTypes.STRING,
    },
    contact_twitter: {
      type: DataTypes.STRING,
    },
  },
  // Configuration du modèle Address
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    modelName: "Address",
    tableName: "addresses", // Nom de la table dans la base de données
  }
);

Event.init(
  // Définition du modèle de la table Event
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    lead_text: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    date_start: {
      type: DataTypes.DATE,
    },
    date_end: {
      type: DataTypes.DATE,
    },
    occurrences: {
      type: DataTypes.TEXT,
    },
    date_description: {
      type: DataTypes.TEXT,
    },
    pmr: {
      type: DataTypes.BOOLEAN,
    },
    blind: {
      type: DataTypes.BOOLEAN,
    },
    deaf: {
      type: DataTypes.BOOLEAN,
    },
    transport: {
      type: DataTypes.STRING,
    },
    price_detail: {
      type: DataTypes.STRING,
    },
    access_link: {
      type: DataTypes.STRING,
    },
    access_link_text: {
      type: DataTypes.STRING,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    title_event: {
      type: DataTypes.STRING,
    },
    address_text: {
      type: DataTypes.STRING,
    },
    lat: {
      type: DataTypes.FLOAT,
    },
    lon: {
      type: DataTypes.FLOAT,
    },
    accessType_id: {
      type: DataTypes.INTEGER,
      references: {
        model: AccessType,
        key: "id", // Clé étrangère faisant référence à l'ID de la table AccessType
      },
    },
    priceType_id: {
      type: DataTypes.INTEGER,
      references: {
        model: PriceType,
        key: "id", // Clé étrangère faisant référence à l'ID de la table PriceType
      },
    },
    audience_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Audience,
        key: "id", // Clé étrangère faisant référence à l'ID de la table Audience
      },
    },
    group_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Group,
        key: "id", // Clé étrangère faisant référence à l'ID de la table Group
      },
    },
    address_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Address,
        key: "id", // Clé étrangère faisant référence à l'ID de la table Address
      },
    },
  },
  // Configuration du modèle Event
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    modelName: "Event",
    tableName: "events", // Nom de la table dans la base de données
  }
);

Tag.init(
  // Définition du modèle de la table Tag
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tag: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  // Configuration du modèle Tag
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    modelName: "Tag",
    tableName: "tags", // Nom de la table dans la base de données
  }
);

EventTag.init(
  // Définition du modèle de la table EventTag
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    EventId: {
      type: DataTypes.INTEGER,
      references: {
        model: Event,
        key: "id", // Clé étrangère faisant référence à l'ID de la table Event
      },
    },
    TagId: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: "id", // Clé étrangère faisant référence à l'ID de la table Tag
      },
    },
  },
  // Configuration du modèle EventTag
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    modelName: "EventTag",
    tableName: "event_tags", // Nom de la table dans la base de données
  }
);

// Définition des relations many-to-many entre Event et Tag à travers EventTag
Event.belongsToMany(Tag, { through: "EventTag", as: "tags" });
Tag.belongsToMany(Event, { through: "EventTag", as: "events" });

// Définition des relations many-to-one entre Event et AccessType
AccessType.hasMany(Event, { foreignKey: "accessType_id", as: "events" });
Event.belongsTo(AccessType, { foreignKey: "accessType_id", as: "accessType" });

// Définition des relations many-to-one entre Event et PriceType
PriceType.hasMany(Event, { foreignKey: "priceType_id", as: "events" });
Event.belongsTo(PriceType, { foreignKey: "priceType_id", as: "priceType" });

// Définition des relations many-to-one entre Event et Audience
Audience.hasMany(Event, { foreignKey: "audience_id", as: "events" });
Event.belongsTo(Audience, { foreignKey: "audience_id", as: "audience" });

// Définition des relations many-to-one entre Event et Group
Group.hasMany(Event, { foreignKey: "group_id", as: "events" });
Event.belongsTo(Group, { foreignKey: "group_id", as: "group" });

// Définition des relations many-to-one entre Event et Address
Address.hasMany(Event, { foreignKey: "address_id", as: "events" });
Event.belongsTo(Address, { foreignKey: "address_id", as: "address" });

// Fonction asynchrone qui synchronise les modèles avec la base de données et injecte les données

// (async () => {
//   await sequelize.sync({ force: true }); // Synchronisation avec la base de données, force la recréation des tables (normalement éviter en prod)
//   console.log("All models were synchronized successfully.");

//   let lat, lon;

//   for (d of data) {
//     if (d["lat_lon"] !== null) {
//       lat = Number(d["lat_lon"]["lat"]).toFixed(4);
//       lon = Number(d["lat_lon"]["lon"]).toFixed(4);
//     }

//     // Création d'une instance d'Event avec les données du fichier JSON
//     const event = Event.build({
//       id: d["id"],
//       url: d["url"],
//       title: d["title"],
//       lead_text: d["lead_text"],
//       description: d["description"],
//       date_start: d["date_start"],
//       date_end: d["date_end"],
//       occurrences: d["occurrences"],
//       date_description: d["date_description"],
//       pmr: d["pmr"],
//       blind: d["blind"],
//       deaf: d["deaf"],
//       transport: d["transport"],
//       price_detail: d["price_detail"],
//       access_link: d["access_link"],
//       access_link_text: d["access_link_text"],
//       updated_at: d["updated_at"],
//       title_event: d["title_event"],
//       address_text: d["address_text"],
//       lat: lat,
//       lon: lon,
//     });
//     await event.save(); // Sauvegarde de l'instance Event dans la base de données

//     if (d["tags"] !== null) {
//       // Pour chaque tag dans l'intance Event
//       for (t of d["tags"]) {
//         let [tag, created] = await Tag.findOrCreate({
//           where: { tag: t }, // Recherche ou création du tag dans la base de données
//         });

//         if (created) {
//           console.log(`Tag '${t}' created`);
//         }

//         // Création de l'association Event-Tag
//         const eventTag = EventTag.build({
//           EventId: d["id"],
//           TagId: tag.id,
//         });
//         await eventTag.save(); // Sauvegarde de l'association dans la base de données
//       }
//     }

//     if (d["access_type"] !== null) {
//       // Recherche ou création de l'access_type dans la base de données
//       let [accessType, created] = await AccessType.findOrCreate({
//         where: { access_type: d["access_type"] },
//       });

//       if (created) {
//         console.log(`Access type '${d["access_type"]}' created`);
//       }

//       // Association Event-AccessType
//       event.accessType_id = accessType.id;
//       await event.save();
//     }

//     if (d["price_type"] !== null) {
//       // Recherche ou création du price_type dans la base de données
//       let [priceType, created] = await PriceType.findOrCreate({
//         where: { price_type: d["price_type"] },
//       });

//       if (created) {
//         console.log(`Price type '${d["price_type"]}' created`);
//       }

//       // Association Event-PriceType
//       event.priceType_id = priceType.id;
//       await event.save();
//     }

//     if (d["audience"] !== null) {
//       // Recherche ou création de l'audience dans la base de données
//       let [audience, created] = await Audience.findOrCreate({
//         where: { audience: d["audience"] },
//       });

//       if (created) {
//         console.log(`Audience '${d["audience"]}' created`);
//       }

//       // Association Event-Audience
//       event.audience_id = audience.id;
//       await event.save();
//     }

//     if (d["group"] !== null) {
//       // Recherche ou création du group dans la base de données
//       let [group, created] = await Group.findOrCreate({
//         where: { group: d["group"] },
//       });

//       if (created) {
//         console.log(`Group '${d["group"]}' created`);
//       }

//       // Association Event-Group
//       event.group_id = group.id;
//       await event.save();
//     }

//     // Création d'une instance d'Address avec les données du fichier JSON
//     // si l'adresse n'existe pas déjà dans la base de données

//     try {
//       if (d["address_name"] !== null) {
//         let [address, created] = await Address.findOrCreate({
//           where: {
//             address_name: d["address_name"],
//           },
//           defaults: {
//             address_name: d["address_name"],
//             lat: lat,
//             lon: lon,
//             address_street: d["address_street"],
//             address_zipcode: d["address_zipcode"],
//             address_city: d["address_city"],
//             contact_url: d["contact_url"],
//             contact_phone: d["contact_phone"],
//             contact_mail: d["contact_mail"],
//             contact_facebook: d["contact_facebook"],
//             contact_twitter: d["contact_twitter"],
//           },
//         });

//         if (created) {
//           console.log(`Address '${d["address_name"]}' created`);
//         }

//         // Association Event-Address
//         event.address_id = address.id;
//         await event.save();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   console.log("Data injection completed successfully.");
// })();

module.exports = {
  Event,
  Tag,
  EventTag,
  AccessType,
  PriceType,
  Audience,
  Group,
  Address,
};
