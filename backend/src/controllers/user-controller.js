const { getUserByEmail, createNewUser } = require('../managers/users-manager');

const createUser = async(req, res, next) => {
  try {
    const payload = req.body;
    const result = await createNewUser(payload);
    if (result) {
      res.status(201).json(formatter(result))
    }
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

const getUser = async(req, res, next) => {
  try {
    const { email } = req.query;
    const result = await getUserByEmail(email);
    console.log(result)
    if (result.length > 0) {
      res.status(200).json(formatter(result[0]))
    } else {
      res.status(204).json()
    }
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

const formatter = (payload) => {
  const data = {
    id: payload._id,
    name: payload.name,
    email: payload.email,
    avatar: payload.avatar
  };
  console.log(data, payload)

  return data;
}

module.exports = {
  createUser,
  getUser,
};
