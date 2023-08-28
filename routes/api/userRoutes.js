const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  addReaction,
  removeReaction,
} = require('../../controllers/studentController');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/reactions
router.route('/:studentId/assignments').post(addReaction);

// /api/users/:userId/reactions/:reactionId
router.route('/:userId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
