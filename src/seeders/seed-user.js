'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let object = [];
    for(let i = 0; i < 5; i++){
        object.push({
          firstName: `cang ${i}`,
          lastName: `nguyen ${i}`,
          email: `cang.nguyen${i}@gmail.com`,
          password:`123456${i}a`,
          address: `1234 Main St ${i}`,
          roleID: `R${i}`,
          phoneNumber: `123456789${i}`,
          positionID: `P${i}`,
          image: `image${i}`,
          gender: i%2? true: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        })};


    return await queryInterface.bulkInsert('Users', object);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
