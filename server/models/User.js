const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 5,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        // This makes sure the string typed in above matchs the email regex
        match: [/.+@.+\..+/],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }
    ]
})

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    await bcrypt.compare(password, this.password);
  };  

const User = mongoose.model('User', userSchema);

module.exports = User;