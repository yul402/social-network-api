const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

// Schema to create thought model
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
      get: (date)=> {
        const dateNew = new Date(date)
        const month = dateNew.getMonth() + 1;
        const day = dateNew.getDate();
        const hour = dateNew.getHours();
        const min = dateNew.getMinutes();
        const sec = dateNew.getSeconds();
        var dateFormatted = dateNew.getFullYear() + "-" + month + "-" + day + "_" +  hour + ":" + min + ":" + sec;
        return dateFormatted;
      }
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
      getters: true,
    },
    id: false,
  }
);


// Add a virtual to count number of reaction for each thought
  thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
