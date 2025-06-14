const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Team = require('./team');
const Bug = require('./bug');

const UserSchema = new Schema({
  email: {
    type: String,
    require: [true, 'Email cannot be Empty'],
    unique: true,
  },
  teams: [
    {
      team: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
      },
      role: { type: String, enum: ['Beginner', 'Intermediate', 'Expert'] },
    },
  ],
  bugsFound: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Bug',
    },
  ],
  Assigned: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Bug',
    },
  ],
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);
