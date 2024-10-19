const { userModule } = require('../models/userModel');

const SignUp = async (body) => {
  try {
    const saveUser  = await new userModule(body).save();
    return saveUser ;
  } catch (error) {
    throw error;
  }
};

const findUserByToken = async (token) => {
  return await userModule.findOne({ verificationToken: token });
};

module.exports = {
  SignUp,
  findUserByToken,
};