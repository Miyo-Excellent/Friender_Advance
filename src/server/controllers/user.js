/******************************************************* Dependencies *******************************************************/

const passport = require("passport");

/********************************************************** Models **********************************************************/

const User = require("../models/user");

/********************************************************** Controller **********************************************************/

const Signup = (req, res, next) => {
  const data = {
    name: req.body.name,
    last_name: req.body.last_name,
    idcc: req.body.idcc,
    place_birth: req.body.place_birth,
    email: req.body.email,
    tel: req.body.tel,
    username: req.body.username,
    nickname: req.body.nickname,
    password: req.body.password,
    birthdate: req.body.birthdate,
    sex: req.body.sex,
    place_residence: req.body.place_residence,
    tel_home: req.body.tel_home
  };

  const user = new User(data);

  const findUser = (err, userExist) => {
    if (userExist) {
      return res.status(400).send("El email ya esta registrado");
    }

    user.save(err => {
      if (err) {
        return next(err);
      }
      req.logIn(user, err => {
        if (err) {
          return next(err);
        }
        res.send("usuario creado exitosamente");
      });
    });
  };

  User.findOne({ email: req.body.email }, findUser);
};

const Login = (req, res, next) => {
  const authenticate = (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(400).send("Username o contraseña no validos");
    }

    req.logIn(user, err => {
      if (err) {
        return next(err);
      }

      res.send("login Exitoso");
    });
  };

  passport.authenticate("local", authenticate)(req, res, next);
};

const logout = (req, res) => {
  req.logout();
  res.send("logout Exitoso");
};

const deleteUser = (req, res) => { // Funcion que borra registro de usuario
  const userId = req.params.userId;

  const findUser = (err, user) => {
    if (err) {
      return res.status(500).send({ message: "Error al acceder al servidor" });
    }

    if (!user) {
      return res.status(404).send({ message: "El usuario no existe" });
    }

    user.remove(err => {
      if (err) {
        return res
          .status(500)
          .send({ message: "Error al acceder al servidor" });
      }

      res.status(200).send({ message: `el usuario a sido borrado` });
    });
  };

  User.findById(userId, findUser);
};

const updateUser = (req, res) => { // Funcion que actualiza la informacion del usuario

  const userId = req.params.userId;

  const update = req.body;

  const findUser = (err, userUpdate) => {
    if (err) {
      return res.status(500).send({ message: "Error al acceder al servidor" });
    }

    res.status(200).json({ userUpdate });
  };

  User.findByIdAndUpdate(userId, update, findUser);
};

const getUsers = (req, res) => { // Recorrer base de datos metodo find()

  const findUser = (err, users) => {
    if (err) { // Error en el servidor
      return res.status(500).send({ message: `Internal Server Error: ${err}` });
    }

    if (!users) {// Usuario no encontrados
      return res.status(404).send({ message: "No encontrado" });
    }
    res.status(200).render("users/", { users: users });
    //usuarios encontrados
  };

  User.find({}, findUser);
};

const getUser = (req, res) => {
  const userId = req.params.userId;
  const findUser = (err, user) => {
    if (err) {
      return res
        .status(500)
        .send({ message: `Error interno del servidor: ${err}` }); // Error en el servidor
    }
    if (!user) {
      return res.status(404).send({ message: "Usuario no encontrado" }); //No existe el usuario
    }

    res.status(200).json({ user: user }); //usuario
  };

  //recorrer base de datos hasta encontrar el userId
  User.findById(userId, findUser);
};

export default {
  Signup,
  Login,
  logout,
  deleteUser,
  updateUser,
  getUsers,
  getUser
};

/*
// Crear Usuario
function new_user (req, res) {
  console.log('POST /Users')
  console.log(req.body)
  const data = {
    name: req.body.name,
    last_name: req.body.last_name,
    idcc: req.body.idcc,
    place_birth: req.body.place_birth,
    email: req.body.email,
    tel: req.body.tel,
    username: req.body.username,
    nickname: req.body.nickname,
    password: req.body.password,
    birthdate: req.body.birthdate,
    sex: req.body.sex,
    place_residence: req.body.place_residence,
    tel_home: req.body.tel_home
  }
  const user = new User(data) // se crea nuevo usuario
  //Guardar usuario en base de datos
  user.save()
    .then(() => {
       console.log(user)
       res.status(200).json({user: user})
    })
    .catch((err)=> {
      res.status(500).send({ message: `Error interno del servidor: ${err}` })

    })

    // Se envia estatus y la informacion del usuario creado.
  }
//obtener todos los usuarios
function getUsers (req, res) {
  //recorrer base de datos metodo find ()
  User.find({}, (err, users) => {
    if (err) return res.status(500).send({message: `Internal Server Error: ${err}`}) // Error en el servidor
    if (!users) return res.status(404).send({message: 'No encontrado'}) // Usuario no encontrados
    res.status(200).json({users: users}) //usuarios encontrados
  })
}
//obetener usuario por ID
function getUser (req, res) {
  let userId = req.params.userId
  //recorrer base de datos hasta encontrar el userId
  User.findById(userId, (err, user) => {
    if (err) return res.status(500).send({message: `Error interno del servidor: ${err}`}) // Error en el servidor
    if (!user) return res.status(404).send({message: 'Usuario no encontrado'}) //No existe el usuario
    res.status(200).json({user: user}) //usuario
  })
}
//logueo de usuario
function login (req, res) {
  //Encontrar usuario por nombre y password
  User.findOne({username: req.body.username, password: req.body.password}, (err, user) => {
    if (err) return res.status(500).send({ message: err }) // si manda error 500 es que a pasado algo en la peticion
    if (!user) return res.status(404).send({ message: `Usurio no encontrado` })// si manda error 404 es que no existe este usuario
    req.session.user_id = user._id
    req.session.username = user.username
    req.session.nickname = user.nickname
    console.log(req.session.user);
    res.status(200).json({user: user}) // manda estado 200 y envia el mensaje que se a logeado correctamente
  })
}
function updateUser(req, res) { // funcion que actualiza la informacion del usuario
  let userId = req.params.userId
  let update = req.body
  User.findByIdAndUpdate(userId, update, (err, userUpdate) => {
    if (err) return res.status(500).send({message: "Error al acceder al servidor"})
    res.status(200).json({userUpdate})
  }
)
}
function deleteUser(req, res) { //funcion que borra registro de usuario
  let userId = req.params.userId
  User.findById(req.params.userId, (err, user) => {
    if (err) return res.status(500).send({message: 'Error al acceder al servidor'})
    user.remove(err => {
      if (err) return res.status(500).send({message: 'Error al acceder al servidor'})
      res.status(200).send({message: `el usuario a sido borrado`})
    })
  })
}
//se exportan funciones
module.exports =
{
  new_user,
  login,
  getUsers,
  getUser,
  deleteUser,
  updateUser
}
*/
