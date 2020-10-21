const express = require('express');
const router = express.Router();

const workflowRouter = require('./app/routes/workflow.router');

router.use('/workflows', workflowRouter);

module.exports = router;