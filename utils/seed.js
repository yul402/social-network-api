const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    console.log(userCheck)

    if (userCheck.length) {
      await connection.dropCollection('users');
      console.log('droped')
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    console.log(thoughtCheck)
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
      console.log('droped')
    }

  // Add students to the collection and await the results
  let randomUser = getRandomUser(10)
  await User.collection.insertMany(randomUser);

  // Add thoughts to the collection and await the results
  let thoughts = getRandomThought(randomUser,10)
  await Thought.collection.insertMany(thoughts);


  // Log out the seed data to indicate what should appear in the database
  console.table(randomUser);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});