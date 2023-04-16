'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let object = [];
    for(let i = 0; i < 10; i++){
        object.push({
            firstName: `cang ${i}`,
            lastName: `nguyen ${i}`,
            email: `cang.ngyenduc${i}@gmail.com`,
            password:`123456${i}`}
            )};
    return await queryInterface.bulkInsert('testings', object);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('testings', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
