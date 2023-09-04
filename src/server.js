import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import todoRoutes from '/routes/todo.routes';
import db from './models';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors());

// parse requests of content-type -application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
const Role = db.role;

db.sequelize.sync();
/*
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync DB');
  initail();
});*/

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my applicaiton' });
});

// routes
const userRoutes = require('./routes/user.routes');

app.use('/api/test/', userRoutes);

const authRoutes = require('./routes/auth.routes');

app.use('/api/auth/', authRoutes);

const todoRoutes = require('./routes/todo.routes');

app.use('/api/todo/', todoRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initail() {
  Role.create({
    id: 1,
    name: 'user',
  });

  Role.create({
    id: 2,
    name: 'moderator',
  });

  Role.create({
    id: 3,
    name: 'admin',
  });
}
