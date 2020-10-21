const ERROR_MESSAGES = {
    NOT_FOUND: 'Workflow not found.',
    NO_REMAINING: 'You have no remaining workflows.',
    DATA_REQUIRED: 'You have to input a json in the data attribute',
    STATUS_ENUM: 'Status must be inserted or consumed'
};

const ENUM_STATUS = ['inserted', 'consumed'];

module.exports = {
    ERROR_MESSAGES,
    ENUM_STATUS
}