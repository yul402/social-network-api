const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// Aggregate function to get the number of students overall
// const headCount = async () => {
//   const numberOfStudents = await User.aggregate()
//     .count('studentCount');
//   return numberOfStudents;
// }

// Aggregate function for getting the overall grade using $avg
// const grade = async (studentId) =>
//   Student.aggregate([
//     // only include the given student by using $match
//     { $match: { _id: new ObjectId(studentId) } },
//     {
//       $unwind: '$assignments',
//     },
//     {
//       $group: {
//         _id: new ObjectId(studentId),
//         overallGrade: { $avg: '$assignments.score' },
//       },
//     },
//   ]);

module.exports = {
  // Get all students
  async getUser(req, res) {
    try {
      const users = await User.find();

      const userObj = {
        users,
        // headCount: await headCount(),
      };

      res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single student
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }

      res.json({
        user,
        // grade: await grade(req.params.studentId),
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
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
  // Delete a student and remove them from the course
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No such student exists' });
      }

    //   const thought = await Thought.findOneAndUpdate(
    //     { students: req.params.studentId },
    //     { $pull: { students: req.params.studentId } },
    //     { new: true }
    //   );

    //   if (!course) {
    //     return res.status(404).json({
    //       message: 'Student deleted, but no courses found',
    //     });
    //   }

      res.json({ message: 'User successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Add an assignment to a student
//   async addAssignment(req, res) {
//     console.log('You are adding an assignment');
//     console.log(req.body);

//     try {
//       const student = await Student.findOneAndUpdate(
//         { _id: req.params.studentId },
//         { $addToSet: { assignments: req.body } },
//         { runValidators: true, new: true }
//       );

//       if (!student) {
//         return res
//           .status(404)
//           .json({ message: 'No student found with that ID :(' });
//       }

//       res.json(student);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Remove assignment from a student
//   async removeAssignment(req, res) {
//     try {
//       const student = await Student.findOneAndUpdate(
//         { _id: req.params.studentId },
//         { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
//         { runValidators: true, new: true }
//       );

//       if (!student) {
//         return res
//           .status(404)
//           .json({ message: 'No student found with that ID :(' });
//       }

//       res.json(student);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
};
