'use strict';

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      r({ title: "16 Accords of Madness, v. VI", description: "A tale of a duel between Sheogorath and Hircine.", author: "Anonymous", coverPhotoUrl: "https://elderscrolls.fandom.com/wiki/Sixteen_Accords_of_Madness,_Book_IX?file=Book06.png"}),
      r({ title: "16 Accords of Madness, v. IX", description: "Sheogorath and Vaermina strike a bet.", author: "Anonymous", coverPhotoUrl: "https://elderscrolls.fandom.com/wiki/Sixteen_Accords_of_Madness,_Book_IX?file=Book06.png"}),
      r({ title: "16 Accords of Madness, v. XII", description: "Malacath's dealings with Sheogorath.", author: "Anonymous", coverPhotoUrl: "https://elderscrolls.fandom.com/wiki/Sixteen_Accords_of_Madness,_Book_IX?file=Book06.png"}),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books');
  }
};
