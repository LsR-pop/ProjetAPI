const express = require("express");
const app = express();
const cors = require("cors");
const {
  Sequelize,
  Event,
  Tag,
  EventTag,
  AccessType,
  PriceType,
  Audience,
  Group,
  Address,
} = require("./Data/models");

app.use(cors());

app.get("/api/events", (req, res) => {
  Event.findAll({
    limit: 10,
    include: [
      {
        model: Tag,
        as: "tags",
        through: { attributes: [] },
      },
      {
        model: AccessType,
        as: "accessType",
      },
      {
        model: PriceType,
        as: "priceType",
      },
      {
        model: Audience,
        as: "audience",
      },
      {
        model: Group,
        as: "group",
      },
      {
        model: Address,
        as: "address",
      },
    ],
  }).then((events) => {
    res.json(events);
  });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
