const workflowService = require('../services/workflow.service');
const { CSV_FOLDER, removeCsvFolder } = require('../utils/utils');

exports.add = async (req, res, next) => {
    try {
        const createdWorkflow = await workflowService.add(req.body);
        res.status(201).json(createdWorkflow);
    } catch (error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const updatedWorkflow = await workflowService.update(req.params.uuid, req.body);
        res.status(200).json(updatedWorkflow);
    } catch (error) {
        next(error);
    }
};

exports.getAll = async (req, res, next) => {
    try {
        const workflows = await workflowService.getAll();
        res.status(200).json(workflows);
    } catch (error) {
        next(error);
    }
};

exports.consume = async (req, res, next) => {
    try {
        const data = await workflowService.consume();
        res.header('Content-Type', 'text/csv');
        res.attachment(`${CSV_FOLDER}/data.csv`);
        res.send(data);
        removeCsvFolder();
    } catch (error) {
        next(error);
    }
};

exports.get = async (req, res, next) => {
    try {
        const workflow = await workflowService.get(req.params.uuid);
        res.status(200).json(workflow);
    } catch (error) {
        next(error);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const deletedWorkflow = await workflowService.dele(req.params.uuid);
        res.status(200).json(deletedWorkflow);
    } catch (error) {
        next(error);
    }
};