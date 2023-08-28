const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser
} = require('../../controllers/studentController');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/reactions
router.route('/:studentId/assignments').post(addReaction);

// /api/users/:userId/reactions/:reactionId
router.route('/:userId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
