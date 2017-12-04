// Dependencies
import express from "express";

const api = express.Router();

api.get("/user/servicesPosts", (req, res, next) => {
  // Services Posts Example
  const data = [
    {
      img:
        "http://www.zhangshidai.com/cheats/resources/logoquiz/mcdonalds.png",
      califacation: 3,
      honorary: "1200000",
      title: "MC Donalds",
      about: "Sellers",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate vel labore quasi veritatis exercitationem laborum quo voluptatem numquam, alias mollitia vitae. Neque cupiditate cumque recusandae!"
    },
    {
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_Earth_Logo.svg/2000px-Google_Earth_Logo.svg.png",
      califacation: 5,
      honorary: "2200000",
      title: "Google",
      about: "Forjando el fut...",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate vel labore quasi veritatis exercitationem laborum quo voluptatem numquam, alias mollitia vitae. Neque cupiditate cumque recusandae!"
    },
    {
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/2000px-Facebook_icon_2013.svg.png",
      califacation: 4,
      honorary: "3600000",
      title: "Facebook",
      about: "back-end develo...",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate vel labore quasi veritatis exercitationem laborum quo voluptatem numquam, alias mollitia vitae. Neque cupiditate cumque recusandae!"
    }
  ];
  res.status(200).send(data);
  next();
});

export default api;
