const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: 
      {
        type: String,
        required:true,
        unique:true,
        trim:true,
      },
    email:
      {
        type: String,
        required:true,
        unique:true,
        trim:true,
        validate:
        {
          validator:function(email) {
            var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return re.test(email)
          },
          message:"Please fill a valid email address"
        }
        },
    thoughts: [
      {
        type:Schema.Types.ObjectId,
        ref:'thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets and sets the user's friend count
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })

// Initialize "User" model
const User = model('user', userSchema);

module.exports = User;
