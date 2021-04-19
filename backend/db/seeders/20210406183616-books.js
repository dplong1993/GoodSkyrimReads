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
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book06.png",
        },
        {
          title: "16 Accords of Madness, v. IX",
          description: "Sheogorath and Vaermina strike a bet.",
          author: "Anonymous",
          bookSeries: "16 Accords of Madness",
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book06.png",
        },
        {
          title: "16 Accords of Madness, v. XII",
          description: "Malacath's dealings with Sheogorath.",
          author: "Anonymous",
          bookSeries: "16 Accords of Madness",
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book06.png",
        },
        {
          title: "2920, vol 01 - Morning Star",
          description:
            "First book in a series of books recounting the events surrounding the Empire during the last year of the First Era.",
          author: "Carlovac Townway",
          bookSeries: "2920",
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book04Red.png",
        },
        {
          title: "2920, vol 02 - Sun's Dawn",
          description:
            "Details one of Sotha Sil's lessons, Turala's exile and Molag Bal arriving to Gilverdale, as well as Almalexia discovering the city's destruction.",
          author: "Carlovac Townway",
          bookSeries: "2920",
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/IllusionSkillBook.png",
        },
        {
          title: "2920, vol 03 - First Seed	",
          description:
            "Details the disaster of the attempted Imperial invasion of Mournhold, Morrowind by Emperor Reman III.",
          author: "Carlovac Townway",
          bookSeries: "2920",
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book01.png",
        },
        {
          title: "2920, vol 04 - Rain's Hand",
          description:
            "Follows Sotha Sil and his initiates in their negotiation and dealings with Daedra after the destruction of Gilverdale by Molag Bal.",
          author: "Carlovac Townway",
          bookSeries: "2920",
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/RestorationSkillBook.png",
        },
        {
          title: "2920, vol 05 - Second Seed",
          description:
            "Narrates attempts on the life of Emperor Reman III and Turala's birth of a daughter.",
          author: "Carlovac Townway",
          bookSeries: "2920",
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book07.png",
        },
        {
          title: "2920, vol 06 - Mid Year",
          description:
            "Details the events of the Battle of Ald Marak between Vivec's forces and the army of the Reman Empire.",
          author: "Carlovac Townway",
          bookSeries: "2920",
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/SpellTomeConjuration.png",
        },
        {
          title: "2920, vol 07 - Sun's Height",
          description:
            "Details the events that began the Sacking of Black Gate and the inception of the Morag Tong's contract to assassinate Emperor Reman Cyrodiil III.",
          author: "Carlovac Townway",
          bookSeries: "2920",
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book01.png",
        },
        {
          title: "2920, vol 08 - Last Seed",
          description:
            "Details the events that lead to Juilek Cyrodiil's assassination, as well as the treaty between Cyrodiil and Morrowind that ended the 80 year-long war.",
          author: "Carlovac Townway",
          bookSeries: "2920",
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book07.png",
        },
        {
          title: "2920, vol 09 - Hearth Fire",
          description:
            "Details Empress Tavia's agony and her suicide, Potentate Versidue Shaie convincing the emperor to sentence Rijja to death and Turala and Cassyr meeting a witch of the Skeffington Coven.",
          author: "Carlovac Townway",
          bookSeries: "2920",
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/SpellTomeConjuration.png",
        },
        {
          title: "2920, vol 10 - Frostfall",
          description:
            "Details Turala's life in Skeffington Coven, Cassyr arriving to Dwynnen, his encounter with Sotha Sil's ex-student and his use of Turala's wrath after the destruction of Skeffington Coven.",
          author: "Carlovac Townway",
          bookSeries: "2920",
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/SpellTomeConjuration.png",
        },
        {
          title: "2920, vol 11 - Sun's Dusk",
          description:
            "Details Zuuk's meeting with the Night Mother, first signs of the Daedric attack on Mournhold, negotiations in Bodrum and an attempt of assassination of the Emperor.",
          author: "Carlovac Townway",
          bookSeries: "2920",
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book07.png",
        },
        {
          title: "2920, vol 12 - Evening Star",
          description:
            "Details Emperor Reman Cyrodiil III's death, rebuilding of Mournhold, the Potentate taking on duties of ruling the Empire and the beginning of the Second Era.",
          author: "Carlovac Townway",
          bookSeries: "2920",
          coverPhotoUrl:
            "https://goodskyrimreads.s3.us-east-2.amazonaws.com/Book03a.png",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Books");
  },
};
