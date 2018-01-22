// Data Base Connection
// constante db es para guardar la ruta de la base de datos
const db = process.env.MONGODB || 'mongodb://127.0.0.1:27017/friender';

const SECRET_TOKEN = 'miclavedetokens';

const config = {
  db,
  SECRET_TOKEN
};

export default config;
