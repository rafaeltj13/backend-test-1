const express = require('express')
const workflowController = require('../controllers/workflow.controller')
const router = express.Router()

router.route('/')
    .post(workflowController.add)
    .get(workflowController.getAll);

router.route('/consume')
    .get(workflowController.consume);

router.route('/:uuid')
    .patch(workflowController.update)
    .get(workflowController.get);

module.exports = router;