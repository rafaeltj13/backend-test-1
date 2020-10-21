const { Workflow } = require('../models');
const { generateCsv } = require('../utils/utils');
const { ERROR_MESSAGES } = require('../utils/constants')

const queue = [];

exports.add = async workflow => {
    const newWorkflow = await Workflow.create(workflow);
    queue.push(newWorkflow);
    return newWorkflow;
};

exports.update = async (workflowId, workflowAttributes) => {
    const workflow = await this.get(workflowId);

    if (!workflow) throw new Error(ERROR_MESSAGES.NOT_FOUND);

    return await workflow.update(workflowAttributes);
};

exports.getAll = async () => {
    return await Workflow.findAll({});
};

exports.consume = async () => {
    const workflow = queue.shift();
    if (!workflow) throw new Error(ERROR_MESSAGES.NO_REMAINING);

    await this.update(workflow.UUID, { status: 'consumed' })

    return generateCsv(workflow);
}

exports.get = async workflowId => {
    const workflow = await Workflow.findOne({ UUID: workflowId });

    if (!workflow) throw new Error(ERROR_MESSAGES.NOT_FOUND);

    return workflow;
};

exports.delete = async workflowId => {
    return await Workflow.delete(workflowId);
};