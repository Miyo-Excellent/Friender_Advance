/******************************************************* Dependencies *******************************************************/

/********************************************************** Models **********************************************************/

const Service = require("../models/service");

/******************************************************** Controller ********************************************************/

// crear nuevo servicio
function create_service(req, res) {
  const data = {
    title: req.body.title,
    description: req.body.description,
    logo: req.body.logo,
    salary: req.body.salary,
    fecha: req.body.fecha,
    creator: res.locals.user._id
  };

  const service = new Service(data);

  //se guarda en bd
  service.save(err => {
    if (err) {
      return res
        .status(500)
        .send({ message: `Error al registrar servicio: ${err}` });
    }

    console.log("Servicio guardado");
    res.status(200).json({ service: service });
  });
}

//obetener servicio por ID
function get_service(req, res) {

  const findService = (err, service) => {
    if (err) {
      return res
        .status(500)
        .send({ message: `error interno del servidor: ${err}` });
    }

    if (!service) {
      return res.status(404).send({ message: "No existe ninguna servicio" });
    }

    res.status(200).json({ service: service });
  };

  Service.findById(req.params.serviceId, findService);
}

// Obetener todos los servicios
function get_services(req, res) {

  const findService = (err, services) => {
    if (err) {
      return res
        .status(500)
        .send({ message: `Error interno del servidor: ${err}` });
    }

    if (!services) {
      return res.status(404).send({ message: "No existe ningun servicio" });
    }

    res.status(200).json({ services: services });
  };

  Service.find({}, findService);
}

//buscar servicio
function view_update_service(req, res) {
  const serviceId = req.params.serviceId;

  const findService = (err, service) => {
    if (err) {
      return res
        .status(500)
        .send({ message: `Error interno del servidor: ${err}` });
    }

    if (!service) {
      return res.status(404).send({ message: "No existe ningun servicio" });
    }

    res.render("services/edit_service", { service: service });
  };

  Service.findById(serviceId, findService);
}

//actualizar servicio
function update_service(req, res) {
  const serviceId = req.params.serviceId;
  const update = req.body;

  const findService = (err, service) => {
    if (err) {
      return res.status(500).send({ message: "Error interno del servidor" });
    }

    if (!service) {
      return res.status(404).send({ message: "No existe ningun servicio" });
    }

    res.status(200).json({ service: service });
  };

  console.log(req.params);
  console.log(serviceId, update);

  Service.findByIdAndUpdate(req.params.serviceId, update, findService);
}

//eliminar servicio
function deleteService(req, res) {

  const findService = (err, service) => {
    if (err) {
      return res.status(500).json({ message: "Error interno del servidor" });
    }

    if (!service) {
      return res.status(404).json({ message: "Servicio no encontrado" });
    }

    service.remove(err => {
      if (err) {
        return res
          .status(500)
          .send({ message: "Error al acceder al servidor" });
      }

      res.status(200).send({ message: ` Servicio borrado` });
    });
  };

  Service.findById(req.params.serviceId, findService);
}

export default {
  create_service,
  get_service,
  get_services,
  update_service,
  view_update_service,
  deleteService
};
