// Dependencies
import express from "express";

// Posts
import posts from './data/service/posts';
import newServicePeopleConfig from './data/service/newServicePeopleConfig.json';
import newServiceCompanyConfig from './data/service/newServiceCompanyConfig.json';

const api = express.Router();

api

  .get("/servicesPosts", (req, res) => { // Services Posts Example
    res.status(200).json(posts);
  })

  .get("/new-service-people-config", (req, res) => { // Services Posts Example
    res.status(200).json(newServicePeopleConfig);
  })
  .get("/new-service-company-config", (req, res) => { // Services Posts Example
    res.status(200).json(newServiceCompanyConfig);
  });

export default api;
