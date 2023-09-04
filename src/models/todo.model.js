module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define('todos', {
    title: {
      type: Sequelize.STRING,
    },
    body: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    alerm: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    createdBy: {
      type: Sequelize.INTEGER,
      allowNUll: false,
    },
  });

  return Todo;
};
