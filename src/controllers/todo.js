// let todos = [
//   {
//     todo: 'sleeping',
//     date: 'today 5 aug 2021',
//   },
//   {
//     todo: 'learning',
//     date: 'yesterday 1 aug 2021',
//   },
// ];

// const db = require('../database/connection');
const { users } = require('../../models');

exports.getTodos = async (req, res) => {
  try {
    const user = await users.findAll({
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt'],
      },
    });

    res.send({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

exports.addTodos = async (req, res) => {
  try {
    const user = await users.create(req.body);

    res.send({
      status: 'success added',
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

exports.updateTodos = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await users.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: 'success added',
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
