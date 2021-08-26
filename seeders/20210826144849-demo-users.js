'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      // name table start
      'users',
      // name table end
      [
        {
          name: 'admin',
          email: 'admindumbways@gmail.com',
          password: '12345',
          status: 'admin',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
