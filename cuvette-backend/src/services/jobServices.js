const jobQuery = require('../queries/jobQueries');

const postJob = async (body) => {
  try {
    const job = await jobQuery.postJob(body);
    return job;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  postJob,
};