/******************************************************* Dependencies *******************************************************/

/********************************************************** Models **********************************************************/

const Ofert = require("../models/ofert");

/******************************************************** Controller ********************************************************/

function create_ofert(req, res) { // Crear oferta
  console.log(res.locals.username);

  const data = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    date_top: req.body.date_top,
    creator: res.locals.company._id
  };

  const ofert = new Ofert(data);

  ofert.save(err => { // Guardar Usuario
    if (err) { // Si paso algun error a mandar a guardar
      return res
        .status(500)
        .send({ message: `Error al registrar oferta: ${err}` });
    }

    console.log("oferta creada");
    console.log(ofert);

    res.status(200).json({ ofert: ofert });
  });
}

function get_ofert(req, res) { // Obetener Oferta Por ID

  const findOfert = (err, ofert) => {
    if (err) {
      return res
        .status(500)
        .send({ message: `Error al buscar oferta:: ${err}` });
    }

    if (!ofert) {
      return res.status(404).send({ message: "No existe ninguna oferta" });
    }

    res.status(200).json({ ofert: ofert });
  };

  Ofert.findById(req.params.ofertsId, findOfert);
}

function get_oferts(req, res) { //obetener todas las ofertas
  const findOfert = (err, oferts) => {
    if (err) {
      return res
        .status(500)
        .send({ message: `Error al buscar oferta: ${err}` });
    }

    if (!oferts) {
      return res.status(404).send({ message: "No existe ninguna oferta" });
    }

    res.status(200).json({ oferts: oferts });
  };

  Ofert.find({}, findOfert);
}

function view_update_ofert(req, res) { // Quitar Vista
  const findOfert = (err, ofert) => {
    if (err) {
      return res
        .status(500)
        .send({ message: `Error al buscar oferta: ${err}` });
    }

    if (!ofert) {
      return res.status(404).send({ message: "No existe ninguna oferta" });
    }

    res.render("oferts/edit_ofert", { ofert: ofert });
  };

  Ofert.findById(req.params.ofertsId, findOfert);
}

function update_ofert(req, res) { // Actualizar Oferta
  //const ofertsId = req.params.ofertsId;
  const update = req.body;

  const findOfert = (err, ofert) => {
    if (err) {
      return res.status(500).render("oferts/edit_ofert", { ofert: ofert });
    }

    if (!ofert) {
      return res.status(404).send({ message: "No existe ninguna oferta" });
    } else {
      res.status(200).json({ ofert: ofert });
    }
  };

  Ofert.findByIdAndUpdate(req.params.ofertsId, update, findOfert);
}

function delete_ofert(req, res) { //Eliminar oferta
  const findOfert = (err, ofert) => {
    if (err) {
      return res
        .status(500)
        .send({ message: `Error al buscar oferta: ${err}` });
    }

    if (!ofert) {
      return res.status(404).send({ message: "No existe ninguna oferta" });
    }

    res.status(200).json({ ofert: ofert });
  };

  Ofert.findOneAndRemove(req.params.ofertsId, findOfert);
}

export default {
  create_ofert,
  get_ofert,
  get_oferts,
  update_ofert,
  view_update_ofert,
  delete_ofert
};
