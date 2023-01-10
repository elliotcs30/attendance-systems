'use strict'
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 一次新增 3 筆資料
    await queryInterface.bulkInsert('Users', [{
      account: 'admin',
      name: 'admin',
      email: 'admin@example.com',
      password: await bcrypt.hash('tiadmin', 10),
      is_admin: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      account: 'user1',
      name: 'user1',
      email: 'user1@example.com',
      password: await bcrypt.hash('titaner', 10),
      is_admin: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      account: 'user2',
      name: 'user2',
      email: 'user2@example.com',
      password: await bcrypt.hash('titaner', 10),
      is_admin: false,
      created_at: new Date(),
      updated_at: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    // 清空資料表中所有資料
    await queryInterface.bulkDelete('Users', {})
  }
}
