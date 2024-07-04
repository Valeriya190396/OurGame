'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'GameLines',
      [
        {
          gameId: 1,
          questId:1

        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('GameLines', null, {});
  },
};
