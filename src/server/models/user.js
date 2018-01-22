// Dependencies
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

// Mongoose Schemas
const Schema = mongoose.Schema;

// User Collection
const UserSchema = new Schema(
  {
    name: String, // Nombres
    last_name: String, // Apellidos
    idcc: { // Cedula de identidad
      type: Number,
      unique: true,
      required: "CC is obligatory"
    },
    place_birth: String, // lugar de nacimiento
    email: { // correo, campo unico y requerido.
      type: "String",
      unique: true,
      lowercase: true,
      required: "Email is obligatory"
    },
    tel: { // telefono, campo requerido
      type: Number,
      unique: true,
      required: "Number Celphone is obligatory"
    },
    username: { // nombre de logeo
      type: "String",
      lowercase: true,
      maxlength: [50, "Your username is extensive"],
      minlength: [4, "Your username is short"]
    },
    nickname: { // nombre de perfil
      type: "String",
      lowercase: true,
      maxlength: [20, "Your nickname is extensive"],
      minlength: [4, "Your nickname is short"]
    },
    password: { // contraseña del usuario, minimo 8 caracteres
      type: "String",
      minlength: [7, "Password must be greater than 7 characters"]
    },
    birthdate: { // Fecha de nacimiento, campo requerido
      type: Date,
      required: "birthdate is obligatory"
    },
    sex: { // tipo de sexo
      type: String,
      enum: ["male", "female"],
      required: "Sexo es obligatorio"
    },
    place_residence: String, // lugar de residencia
    profile_img: { // imagen de perfíl
      type: String,
      default: null
    },
    banner: { //imagen de portada
      type: String,
      default: null
    },
    tel_home: Number, // Teléfono fijo
    permision_level: { // Nivel autorización de usuario
      type: Number,
      default: 1
    },
    singUpDate: { // Fech registro
      type: Date,
      default: Date.now()
    },
    lastLogin: Date
  },
  {
    timestamps: true
  }
);

UserSchema.pre("save", next => {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = (password, cb) => {
  bcrypt.compare(password, this.password, (err, sonIguales) => {
    if (err) {
      return cb(err);
    }
    cb(null, sonIguales);
  });
};

export default mongoose.model('User', UserSchema);
