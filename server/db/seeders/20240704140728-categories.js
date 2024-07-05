
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
        
          name:'Загадки',
   

        },
        {
    
          name:'Мульт-Слоганы',
   

        },
        {
     
          name:'Правда/Ложь',
     

        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
