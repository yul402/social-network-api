const { Schema, model } = require('mongoose');

// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.ObjectId,
      default: false,
    },
    reactionBody: {
      type: String,
      required: true,
      max: [280,'Input text cannot exceed 280 characters']
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  //   id: false,
  // }
);

// Create a virtual property `upvoteCount` that gets the amount of comments per user
// reactionSchema
//   .virtual('upvoteCount')
//   // Getter
//   .get(function () {
//     return this.meta.upvotes;
//   });

// Initialize our Post model
const Reaction = model('reaction', reactionSchema);

module.exports = {Reaction,reactionSchema};
