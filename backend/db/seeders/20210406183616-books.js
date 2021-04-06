"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "16 Accords of Madness, v. VI",
          description: "A tale of a duel between Sheogorath and Hircine.",
          author: "Anonymous",
          bookSeries: "16 Accords of Madness",
          coverPhotoUrl: "/images/Book06.png",
        },
        {
          title: "16 Accords of Madness, v. IX",
          description: "Sheogorath and Vaermina strike a bet.",
          author: "Anonymous",
          bookSeries: "16 Accords of Madness",
          coverPhotoUrl: "/images/Book06.png",
        },
        {
          title: "16 Accords of Madness, v. XII",
          description: "Malacath's dealings with Sheogorath.",
          author: "Anonymous",
          bookSeries: "16 Accords of Madness",
          coverPhotoUrl: "/images/Book06.png",
        },
        {
          title: "2920, vol 01 - Morning Star",
          description:
            "First book in a series of books recounting the events surrounding the Empire during the last year of the First Era.",
          author: "Carlovac Townway",
          bookSeries: "2920",
          coverPhotoUrl: "/images/Book04Red.png",
        },
        {
          title: "2920, vol 02 - Sun's Dawn",
          description:
            "	Details one of Sotha Sil's lessons, Turala's exile and Molag Bal arriving to Gilverdale, as well as Almalexia discovering the city's destruction.",
          author: "Carlovac Townway",
          bookSeries: "2920",
          coverPhotoUrl: "/images/IllusionSkillBook.png",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Books");
  },
};
