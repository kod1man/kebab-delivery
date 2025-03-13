'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userSeeds = [
      {
        name: 'Курьер 1',
        phone: '+79111111111',
        city: 'Москва',
        email: 'courier1@example.com',
        password: 'password123',
        role: 'courier',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Курьер 2',
        phone: '+79222222222',
        city: 'Санкт-Петербург',
        email: 'courier2@example.com',
        password: 'password123',
        role: 'courier',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Заказчик 1',
        phone: '+79333333333',
        city: 'Москва',
        email: 'customer1@example.com',
        password: 'password123',
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Заказчик 2',
        phone: '+79444444444',
        city: 'Санкт-Петербург',
        email: 'customer2@example.com',
        password: 'password123',
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const orderSeeds = [
      {
        title: 'Бургер',
        img: 'https://example.com/burger.jpg',
        city: 'Москва',
        price: '500',
        discountPrice: '10',
        isAvailable: true,
        courierId: 1, // Связан с курьером с id=1
        customerId: null, // Пока не выкуплен
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Пицца',
        img: 'https://example.com/pizza.jpg',
        city: 'Санкт-Петербург',
        price: '800',
        discountPrice: '15',
        isAvailable: true,
        courierId: 2, // Связан с курьером с id=2
        customerId: null, // Пока не выкуплен
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Суши',
        img: 'https://example.com/sushi.jpg',
        city: 'Москва',
        price: '700',
        discountPrice: '5',
        isAvailable: false, // Уже выкуплен
        courierId: 1, // Связан с курьером с id=1
        customerId: 3, // Выкуплен заказчиком с id=3
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Users', userSeeds);
    await queryInterface.bulkInsert('Orders', orderSeeds);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
