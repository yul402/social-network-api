const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // Get all students
  async getUser(req, res) {
    try {
      const users = await User.find();

      res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single student
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .select('-__v')
        // how to fill the thoughts and friends array to display all the data

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
    // Update a user
    async updateUser(req, res) {
      try {
        const user = await User.findOneAndUpdate(
          { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true, new: true }
        );
  
        if (!user) {
          res.status(404).json({ message: 'No course with this id!' });
        }
  
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  // create a new student
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a user and remove them from the friends
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No such student exists' });
      }

   
      res.json({ message: 'User successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
