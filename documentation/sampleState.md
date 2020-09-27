{
+ entities: {
  - users: {

          1: {
              id: 1,
              email: demo@example.com,
              firstName: Demo,
              lastName: User,
              location: Somewhere, US
              ratings: {1}
              reviews: {1}
              haveRead: {1}
              currentlyReading: {1}
              wantToRead: {1}
          },
          2: {
              id: 1,
              email: demo1@example.com,
              firstName: Demo,
              lastName: User2,
              location: Somewhere, US
              ratings: {2}
              reviews: {2}
              haveRead: {2}
              currentlyReading: {2}
              wantToRead: {2}
          },
          3: {
              id: 1,
              email: demo2@example.com,
              firstName: Demo,
              lastName: User3,
              location: Somewhere, US
              ratings: {3}
              reviews: {3}
              haveRead: {3}
              currentlyReading: {3}
              wantToRead: {3}
          }
      },
  - books: {

          1: {
              id: 1,
              title: 16 Accords of Madness, v. VI,
              description: A tale of a duel between Sheogorath and Hircine,
              author: Anonymous,
              covorPhotoUrl: https://vignette.wikia.nocookie.net/elderscrolls/images/9/92/Book06.png/revision/latest/scale-to-width-down/350?cb=20120512211846,
              ratings: {1}
              reviews: {1}
              haveRead: {1}
              currentlyReading: {2}
              wantToRead: {3}
          },
          2: {
              id: 2,
              title: 16 Accords of Madness, v. IX,
              description: Sheogorath and Vaermina strike a bet.,
              author: Anonymous,
              covorPhotoUrl: https://vignette.wikia.nocookie.net/elderscrolls/images/9/92/Book06.png/revision/latest/scale-to-width-down/350?cb=20120512211846,
              ratings: {2}
              reviews: {2}
              haveRead: {2}
              currentlyReading: {3}
              wantToRead: {1}
          },
          3: {
              id: 3,
              title: 16 Accords of Madness, v. XII,
              description: Malacath's dealings with Sheogorath.,
              author: Anonymous,
              covorPhotoUrl: https://vignette.wikia.nocookie.net/elderscrolls/images/9/92/Book06.png/revision/latest/scale-to-width-down/350?cb=20120512211846,
              ratings: {3}
              reviews: {3}
              haveRead: {3}
              currentlyReading: {1}
              wantToRead: {2}
          },
      },
  - ratings: {

          1: {
              id: 1,
              userId: 1,
              bookId: 1,
              score: 4.5,
          },
          2: {
              id: 2,
              userId: 2,
              bookId: 2,
              score: 3.5,
          },
          3: {
              id: 3,
              userId: 3,
              bookId: 3,
              score: 5.0,
          },
      },
  - reviews: {

          1: {
              id: 1,
              userId: 1,
              bookId: 1,
              content: Great book would recommend!,
          },
          2: {
              id: 2,
              userId: 2,
              bookId: 2,
              content: Kinda crazy but the ending was good!,
          },
          3: {
              id: 3,
              userId: 3,
              bookId: 3,
              conent: I like this,
          },
      },

  - haveRead: {

          1: {
              id: 1,
              userId: 1,
              bookId: 1,
          },
          2: {
              id: 2,
              userId: 2,
              bookId: 2,
          },
          3: {
              id: 3,
              userId: 3,
              bookId: 3,
          },
      },

  - currentlyReading: {

          1: {
              id: 1,
              userId: 1,
              bookId: 3,
          },
          2: {
              id: 2,
              userId: 2,
              bookId: 1,
          },
          3: {
              id: 3,
              userId: 3,
              bookId: 2,
          },
      },

  - wantToRead: {

          1: {
              id: 1,
              userId: 1,
              bookId: 2,
          },
          2: {
              id: 2,
              userId: 2,
              bookId: 3,
          },
          3: {
              id: 3,
              userId: 3,
              bookId: 1,
          },
      },

  }

+auth: {

        id: 1,
        email: demo@example.com,
        firstName: Demo,
        lastName: User,
        location: Somewhere, US
        createdAt: 2020-08-31T20:22:22.211z,
        updatedAt: createdAt: 2020-08-31T20:22:22.211z
}
}
