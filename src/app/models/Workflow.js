const { ENUM_STATUS } = require('../utils/constants');

module.exports = (sequelize, DataTypes) => {
    const Workflow = sequelize.define('Workflow', {
        UUID: {
            allowNull: false,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        status: {
            allowNull: false,
            type: DataTypes.ENUM(ENUM_STATUS),
            defaultValue: 'inserted',
        },
        data: {
            allowNull: false,
            type: DataTypes.JSONB,
            defaultValue: {}
        },
        steps: {
            allowNull: false,
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: []
        }
    });

    Workflow.removeAttribute('id');

    return Workflow;
};