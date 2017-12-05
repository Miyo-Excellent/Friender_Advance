// Dependencies
import express from "express";

// Posts
import posts from './data/service/posts';

const api = express.Router();

api

  .get("/servicesPosts", (req, res) => { // Services Posts Example
    res.status(200).json(posts);
  });

export default api;
