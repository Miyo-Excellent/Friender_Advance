// Dependencies
import express from "express";

// Posts
import posts from './data/service/posts';
import newServicePeopleConfig from './data/service/newServicePeopleConfig.json';
import newServiceCompanyConfig from './data/service/newServiceCompanyConfig.json';
import connectors from './data/connectors.json';

const api = express.Router();

api
  .get("/new-service-company-config", (req, res) => { // Services Posts Example
    res.status(200).json(newServiceCompanyConfig);
    res.end();
  })
  .get("/new-service-people-config", (req, res) => { // Services Posts Example
    res.status(200).json(newServicePeopleConfig);
    res.end();
  })
  .get("/servicesPosts", (req, res) => { // Services Posts Example
    res.status(200).json(posts);
    res.end();
  })
  .get("/connectors", (req, res) => { // Services Posts Example
    res.status(200).json(connectors);
    res.end();
  })
  .post("/created-new-service", (req, res) => { // Create New Services For User
    console.clear();
    console.log(req.body);
    res.end();
  });

export default api;
