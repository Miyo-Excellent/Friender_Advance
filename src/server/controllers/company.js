/******************************************************* Dependencies *******************************************************/

/********************************************************** Models **********************************************************/

// Company
import Company from "../models/company";

/******************************************************* Controllers *******************************************************/

const new_company = (req, res) => { // Crear Compañia

  const data = req.body;
  const company = new Company(data);

  company.save(err => { // Guardar Coḿpañia en BD
    if (err) {
      return (
        res
          .status(500)
          // Error Interno Del Servidor
          .send({ message: `Error interno del servidor: ${err}` })
      );
    }
    console.log("company created");

    return res.status(200).json({ company: company });
  });
};

const getCompanys = (req, res) => { // Mostrar Compañias

  Company.find({}, (err, companys) => { // Mecorrer BD
    if (err) {
      return res
        .status(500)
        .send({ message: `Error interno del servidor: ${err}` });
    }

    if (!companys) {
      return res.status(404).send({ message: "no se encontraron compañias" });
    }

    res.status(200).json({ companys: companys });
  });
};

//obtener compañia por Id
const getCompany = (req, res) => {

  const companyId = req.params.companyId;

  //recorrer bd
  Company.findById(companyId, (err, companys) => {
    if (err) {
      return res
        .status(500)
        .send({ message: `Error interno del servidor: ${err}` });
    }

    if (!companys) {
      return res.status(404).send({ message: "No existe compañia" });
    }

    res.status(200).json({ companys: companys });
  });
};

const login = (req, res) => { // Iniciar Sesión
  const findCompany = (err, company) => {

    console.log(`Compañia Encontrada:
    ${company}`);

    if (err) {
      return res.status(500).send({ message: err });
    }

    if (!company) {
      return res.status(404).send({ message: `Compañia no existe` });
    }

    req.session = {
      ...req.session,
      company_id: company._id,
      username: company.username,
      nickname: company.nickname
    };

    console.log(`Nombre de Usuario: ${req.session.username}`);

    // Envio JSON
    res.status(200).json({ company: company });
  };

  // Recorrer BD Username - Password
  Company.findOne(
    { // Login Data
      username: req.body.username,
      password: req.body.password
    },
    findCompany
  );
};

const view_update_company = (req, res) => {// Borrar Codigo Cuando Se Sengan Las Vistas
  const findCompany = (err, company) => {
    if (err) {
      return res
        .status(500)
        .send({ message: `Error al buscar oferta: ${err}` });
    }

    if (!company) {
      return res.status(404).send({ message: "No existe ninguna oferta" });
    }

    res.render("companys/edit_company", { company: company });
  };

  // Recorrer BD
  Company.findById(req.params.companyId, findCompany);
};

const updateCompany = (req, res) => { // Actualizar Datos En Colección Company
  const companyId = req.params.companyId;
  const update = req.body;

  const findCompany = (err, companyUpdate) => {
    if (err) {
      return res.status(500).send({ message: "Error al acceder al servidor" });
    }

    res
      .status(200)
      .json(
        { companyUpdate: companyUpdate },
        { message: "Se a actualizado la información de la empresa" }
      );
  };

  // Recorrer BD
  Company.findByIdAndUpdate(companyId, update, findCompany);
};

const deleteCompany = (req, res) => { // Funcion Que Borra Registro De Usuario

  //const companyId = req.params.companyId;

  const findCompany = (err, company) => {
    if (err) {
      return res.status(500).send({ message: "Error al acceder al servidor" });
    }

    company.remove(err => {
      if (err) {
        return res
          .status(500)
          .send({ message: "Error al acceder al servidor" });
        res.status(200).send({ message: `Registro eliminado` });
      }
    });
  };

  console.log("entra en esta funcion");

  Company.findById(req.params.companyId, findCompany);
};

export default {
  new_company, // Palabra Reservada Para Llamar a la Funcion SignUp
  login,
  getCompanys, // Palabra Rreservada  Para  Llamar a la Funcion GetUsers
  getCompany,
  updateCompany,
  deleteCompany,
  view_update_company
};
