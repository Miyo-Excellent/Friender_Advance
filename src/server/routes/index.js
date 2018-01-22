// Dependencies
import express from "express";
//import fs from "fs";
import companyCTRL from "../controllers/company";
import userCTRL from "../controllers/user";
import ofertCTRL from "../controllers/ofert";
import serviceCTRL from "../controllers/service";
import passportConfig from "../passport";

export default (req, res, next) => {
  const routes = express.Router();

  // Home
  routes
    .route("/").get((req, res) => {
      res.render("");
    });

  //Rutas modelo company
  routes
    .route("/companys")
    .get(companyCTRL.getCompanys)
    .post(companyCTRL.new_company);

  routes.route("/companys/new").get((req, res) => {
    res.render("companys/new_company");
  });

  routes
    .route("/companys/login")
    .get((req, res) => {
      res.render("companys/login");
    })
    .post(companyCTRL.login);

  routes
    .route("/company/:companyId")
    .get(companyCTRL.getCompany)
    .put(companyCTRL.updateCompany)
    .delete(companyCTRL.deleteCompany);

  ///////////////////////////////////////////////////////////////////////

  routes
    .route("/users")
    .get(userCTRL.getUsers)
    .post(userCTRL.Signup);

  routes
    .route("/users/login")
    .get((req, res) => {
      res.render("users/login");
    })
    .post(userCTRL.Login);

  routes
    .route("/users/logout")
    .get(passportConfig.estaAutenticado, userCTRL.logout);

  routes.route("/userInfo").get(passportConfig.estaAutenticado, (req, res) => {
    res.json(req.user);
  });

  routes.route("/users/new").get((req, res) => {
    res.render("users/new_user");
  });

  routes
    .route("/user/:userId")
    .put(userCTRL.updateUser)
    .delete(userCTRL.deleteUser)
    .get(userCTRL.getUser);

  /*
    //Rutas modelo user
    routes.route('/users')
    .post(userCTRL.new_user)
    .get(userCTRL.getUsers)
    routes.route('/users/new')
    .get((req, res) => {
      res.render('users/new_user')
    })
    routes.route('/users/login')
    .get((req, res) => {
      res.render('/users/login')
    })
    .post(userCTRL.login)
    routes.route('/user/:userId')
    .get(userCTRL.getUser)
    .put(userCTRL.updateUser)
    .delete(userCTRL.deleteUser)
    */

  ///////////////////////////////////////////////////////////////////////

  // Rutas modelo ofertas
  routes.route("/ofert/new").get((req, res) => {
    res.render("oferts/new_ofert");
  });

  routes
    .route("/oferts")
    .get(ofertCTRL.get_oferts)
    .post(ofertCTRL.create_ofert);

  routes.route("/ofert/:ofertsId/edit").get(ofertCTRL.view_update_ofert);

  //routes.all('/ofert/:ofertsId*', finder_oferts)

  routes
    .route("/ofert/:ofertsId")
    .get(ofertCTRL.get_ofert)
    .put(ofertCTRL.update_ofert)
    .delete(ofertCTRL.delete_ofert);
  // vistas

  ///////////////////////////////////////////////////////////////////////

  // Rutas modelo servicios
  routes.route("/service/new").get((req, res) => {
    res.render("services/new_service");
  });

  routes
    .route("/services")
    .get(serviceCTRL.get_services)
    .post(serviceCTRL.create_service);

  routes.route("/services/:serviceId/edit").get(serviceCTRL.view_update_service);

  routes
    .route("/service/:serviceId")
    .get(serviceCTRL.get_service)
    .put(serviceCTRL.update_service)
    .delete(serviceCTRL.deleteService);

  /*
  APIRESTFULL
  GET = Peticion para pedirle algo al servidor
  POST = Peticion para enviarle lo que sea al servidor
  PUT = Peticion para sobrescribir o editar cualquier informacion en el servidor
  DELETE = Peticion para borrar algo que este en el servidor
  */

  /*
  codigos de estado
  200 = la respuesta son correctas y la peticion ha sido procesada correctamente
  300 = respuestas de redireccion el cliente necesita mas acciones para finalizar la Peticion
  400 = Errores por el cliente en el servidor
  500 = Errores por el servidor quiere decir que el servidor esta fallando
  */

  return routes;
};
