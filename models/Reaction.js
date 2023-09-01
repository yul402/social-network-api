const { Schema, Types } = require('mongoose');

// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
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
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `upvoteCount` that gets the amount of comments per user
reactionSchema
  .virtual('timestamp')
  // Getter
  .get(function () {
    const date = new Date(this.createdAt)
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    var str = date.getFullYear() + "-" + month + "-" + day + "_" +  hour + ":" + min + ":" + sec;
    return str;
  });

// Initialize our Post model
// const Reaction = model('reaction', reactionSchema);

module.exports = reactionSchema;
