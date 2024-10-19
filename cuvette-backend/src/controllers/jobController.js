const jobService = require('../services/jobServices');
const emailService = require('../services/emailService');

const postJob = async (req, res) => {
  try {
    const job = await jobService.postJob(req.body);
    await emailService.sendJobAlert('candidate@example.com', job);
    return res.status(200).send(job);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  postJob,
};