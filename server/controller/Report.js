const Report = require('../models/Report.js')


const getReport = async (req, res, next) => {
    try {
      const report = await Report.findById(req.params.id);
      res.status(200).json(report);
    } catch (err) {
      next(err);
    }
  };
const getReports = async (req, res, next) => {
    try {
      const reports = await Report.find();
      res.status(200).json(reports);
    } catch (err) {
      next(err);
    }
  };

module.exports = {getReport,getReports};

