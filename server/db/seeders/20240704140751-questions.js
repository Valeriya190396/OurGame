
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          catId: 1,
          name:'v1',
          answer:'z1',
          score: 100

        },
        {
          catId: 1,
          name:'v2',
          answer:'z2',
          score: 200

        },
        {
          catId: 1,
          name:'q2',
          answer:'q2',
          score: 300

        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
