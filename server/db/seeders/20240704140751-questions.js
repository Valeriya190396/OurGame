"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        catId: 1,
        name: "Что такое хрупкое, что может разрушиться от одного слова?",
        answer: "Тишина",
        score: 100,
      },
      {
        catId: 1,
        name: "Не лёд, а тает, не лодка, а уплывает",
        answer: "Зарплата",
        score: 200,
      },
      {
        catId: 1,
        name: "Какой конь не ест овса?",
        answer: "Шахматный",
        score: 300,
      },
      {
        catId: 1,
        name: "Одно яйцо варится 3 минуты. Сколько минут будут вариться 2 яйца?",
        answer: "3",
        score: 400,
      },
      {
        catId: 1,
        name: "Имя первой женщины в мире освоившей летательный аппарат.",
        answer: "Баба Яга",
        score: 500,
      },
      {
        catId: 2,
        name: "Ну, заяц! Ну, погоди!",
        answer: "Ну, погоди!",
        score: 100,
      },
      {
        catId: 2,
        name: "Соник и его команда устроят настоящий бум!",
        answer: "Соник Х",
        score: 200,
      },
      {
        catId: 2,
        name: "Ребята, давайте жить дружно!",
        answer: "Приключения кота Леопольда",
        score: 300,
      },
      {
        catId: 2,
        name: "Щасс спою!",
        answer: "Жил-был пёс",
        score: 400,
      },
      {
        catId: 2,
        name: "Ну, супостаты, отведайте-ка силушки богатырской! ",
        answer: "Алеша Попович",
        score: 500,
      },
      {
        catId: 3,
        name: "Череп – самая крепкая кость в человеческом теле",
        answer: "Ложь",
        score: 100,
      },
      {
        catId: 3,
        name: "Бананы - это ягоды",
        answer: "Правда",
        score: 200,
      },
      {
        catId: 3,
        name: "Все млекопитающие живут на суше",
        answer: "Ложь",
        score: 300,
      },
      {
        catId: 3,
        name: "Если сложить вместе два числа на противоположных сторонах игральной кости, ответ всегда будет 7",
        answer: "Правда",
        score: 400,
      },
      {
        catId: 3,
        name: "Брокколи содержит больше витамина С, чем лимоны",
        answer: "Правда",
        score: 500,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
