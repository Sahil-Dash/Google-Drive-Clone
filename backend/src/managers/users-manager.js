const { User } = require('../models/index');

const getUserByEmail = async(email) => {
  try {
    const result = await User.find({ email }).lean();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createNewUser = async(data) => {
  try {
    return await User.create(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getUserByEmail,
  createNewUser
};
