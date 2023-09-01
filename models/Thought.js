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
      // get: (date)=> {

      // }
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



  thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Post model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
