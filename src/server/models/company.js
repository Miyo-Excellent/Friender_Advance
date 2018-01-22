// Dependencies
import mongoose from "mongoose";

// Mongoose Schemas
const Schema = mongoose.Schema;

// Company Collection
const CompanySchema = new Schema({
  name: String, // nombre o razon social de la compañia
  nit: {
    type: String,
    unique: true
  },
  place_fundation: String,
  email: { // correo con el usuario se registro total mente obligario y tiene que ser unico
    type: "String",
    unique: true,
    lowercase: true,
    required: "Email is obligatory"
  },
  tel: { // telefono obligatorio de la compañia
    type: Number,
    unique: true,
    required: "Number Celphone is obligatory"
  },
  username: { // nombre de usuario con el que el se registrar
    type: "String",
    maxlength: [50, "Your username is extensive"],
    minlength: [3, "Your username is short"]
  },
  nickname: {
    type: "String",
    maxlength: [20, "Your username is extensive"],
    minlength: [3, "Your username is short"]
  },
  password: { // contraseña con la cual el usuario se registrara
    type: "String",
    minlength: [7, "Password must be greater than 7 characters"]
  },
  fundation: Date,
  typeOfCompany: { // tipo de compañia
    type: String,
    enum: ["inmobiliaria", "otros"]
  },
  residence: String,
  class_company: {
    type: String,
    enum: ["sede principal", "sucursal"]
  },
  profile_img: { // imagen de perfíl
    type: String,
    default: null
  },
  banner: { //imagen de portada
    type: String,
    default: null
  },
  tel_home: Number, // telefono opcional
  permision_level: { // Crea un nivel de permiso al usuario para saber asi cuanto es el poder que tiene este en la app
    type: Number,
    default: 1
  },
  singUpDate: { // el dia que se unio al sistema
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model('Company', CompanySchema);
