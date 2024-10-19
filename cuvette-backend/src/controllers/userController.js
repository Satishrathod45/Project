const userService = require('../services/userServices');
const emailService = require('../services/emailService');
const crypto = require('crypto');

const SignUp = async (req, res) => {
  try {
    const user = await userService.SignUp(req.body);
    const token = crypto.randomBytes(32).toString('hex');
    user.verificationToken = token;
    await user.save();

    await emailService.sendVerificationEmail(user.company_email, token);
    return res.status(200).send({ message: 'User  registered. Verification email sent.' });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const verifyEmail = async (req, res) => {
  const { token } = req.query;
  const user = await userService.findUserByToken(token);
  if (!user) {
    return res.status(400).send({ message: 'Invalid token' });
  }
  user.isVerified = true;
  user.verificationToken = undefined;
  await user.save();
  return res.status(200).send({ message: 'Email verified successfully!' });
};

module.exports = {
  SignUp,
  verifyEmail,
};