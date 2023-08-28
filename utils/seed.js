const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'user' }).toArray();
    console.log(userCheck)
    console.log(connection.db.listCollections({ name: 'user' }))
    if (userCheck.length) {
      await connection.dropCollection('user');
    }

    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
      await connection.dropCollection('thoughts');
    }

    // Create empty array to hold the students
    // const students = [];


  // Loop 20 times -- add students to the students array
//   for (let i = 0; i < 20; i++) {
//     // Get some random assignment objects using a helper function that we imported from ./data
//     const assignments = getRandomAssignments(20);

//     const fullName = getRandomName();
//     const first = fullName.split(' ')[0];
//     const last = fullName.split(' ')[1];
//     const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

//     students.push({
//       first,
//       last,
//       github,
//       assignments,
//     });
//   }

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