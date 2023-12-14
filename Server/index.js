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
const e = require("express");

app.use(cors());

app.get("/api/events", (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 3;
  let offset = limit * (page - 1);

  let next = "/api/events?page=" + (page + 1) + "&limit=" + limit;
  let prev = "/api/events?page=" + (page - 1) + "&limit=" + limit;
  if (page == 1) {
    prev = null;
  }

  let count = 0;

  Event.findAll({
    offset: offset,
    limit: limit,
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
    if (events.length < limit) {
      next = null;
    }
    if (events.length < limit) {
      count += events.length + offset;
    } else {
      count += events.length * page;
    }

    ret = {
      count: count,
      next: next,
      previous: prev,
      results: events,
    };
    res.json(ret);
  });
});

app.get("/api/events/:id", (req, res) => {
  Event.findByPk(req.params.id, {
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
  }).then((event) => {
    res.json(event);
  });
});

app.get("/api/events/tags", (req, res) => {
  Tag.findAll().then((tags) => {
    res.json(tags);
  });
});

app.get("/api/events/tags/:id", (req, res) => {
  Tag.findByPk(req.params.id).then((tag) => {
    res.json(tag);
  });
});

app.get("/api/events/accessTypes", (req, res) => {
  AccessType.findAll().then((accessTypes) => {
    res.json(accessTypes);
  });
});

app.get("/api/events/accessTypes/:id", (req, res) => {
  AccessType.findByPk(req.params.id).then((accessType) => {
    res.json(accessType);
  });
});

app.get("/api/events/priceTypes", (req, res) => {
  PriceType.findAll().then((priceTypes) => {
    res.json(priceTypes);
  });
});

app.get("/api/events/priceTypes/:id", (req, res) => {
  PriceType.findByPk(req.params.id).then((priceType) => {
    res.json(priceType);
  });
});

app.get("/api/events/audiences", (req, res) => {
  Audience.findAll().then((audiences) => {
    res.json(audiences);
  });
});

app.get("/api/events/audiences/:id", (req, res) => {
  Audience.findByPk(req.params.id).then((audience) => {
    res.json(audience);
  });
});

app.get("/api/events/groups", (req, res) => {
  Group.findAll().then((groups) => {
    res.json(groups);
  });
});

app.get("/api/events/groups/:id", (req, res) => {
  Group.findByPk(req.params.id).then((group) => {
    res.json(group);
  });
});

app.get("/api/events/addresses", (req, res) => {
  Address.findAll().then((addresses) => {
    res.json(addresses);
  });
});

app.get("/api/events/addresses/:id", (req, res) => {
  Address.findByPk(req.params.id).then((address) => {
    res.json(address);
  });
});

app.get("/api/events/:id", (req, res) => {
  Event.findByPk(req.params.id, {
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
  }).then((event) => {
    res.json(event);
  });
});

app.get("/api/events/tags", (req, res) => {
  Tag.findAll().then((tags) => {
    res.json(tags);
  });
});

app.get("/api/events/accessTypes", (req, res) => {
  AccessType.findAll().then((accessTypes) => {
    res.json(accessTypes);
  });
});

app.get("/api/events/priceTypes", (req, res) => {
  PriceType.findAll().then((priceTypes) => {
    res.json(priceTypes);
  });
});

app.get("/api/events/audiences", (req, res) => {
  Audience.findAll().then((audiences) => {
    res.json(audiences);
  });
});

app.get("/api/events/groups", (req, res) => {
  Group.findAll().then((groups) => {
    res.json(groups);
  });
});

app.get("/api/events/addresses", (req, res) => {
  Address.findAll().then((addresses) => {
    res.json(addresses);
  });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
