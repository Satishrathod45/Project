const { jobModule } = require('../models/jobModel');

const postJob = async (body) => {
  try {
    const job = await new jobModule(body).save();
    return job;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  postJob,
};