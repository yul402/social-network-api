const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText:       
      {
        type: String,
        required:true,
        min: [1, 'Input text should be more than 1 character'],
        max: [280,'Input text cannot exceed 280 characters']
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username:
      {
        type: String,
        required:true,
      },
    reactions:[reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `upvoteCount` that gets the amount of comments per user
// thoughtSchema
//   .virtual('timestamp')
//   // Getter
//   .get(function () {
//     return this.meta.upvotes;
//   });

// Initialize our Post model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
