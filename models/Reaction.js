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
      get: (date)=> {
        const dateNew = new Date(date)
        const month = dateNew.getMonth() + 1;
        const day = dateNew.getDate();
        const hour = dateNew.getHours();
        const min = dateNew.getMinutes();
        const sec = dateNew.getSeconds();
        var dateFormatted = dateNew.getFullYear() + "-" + month + "-" + day + "_" +  hour + ":" + min + ":" + sec;
        return dateFormatted;
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
