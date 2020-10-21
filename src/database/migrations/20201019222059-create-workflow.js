'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Workflows', {
      id: {
        type: DataTypes.INTEGER
      },
      UUID: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM(['inserted', 'consumed']),
        defaultValue: 'inserted'
      },
      data: {
        allowNull: false,
        type: DataTypes.JSONB,
      },
      steps: {
        allowNull: false,
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: []
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Workflows');
  }
};
