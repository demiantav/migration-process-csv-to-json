import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    dateOfEntry:  Date,

    deviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Device',
    },

    client: String,
    action: String,
    team: String,
    category: String,

})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const User = mongoose.model('User', userSchema);

export default User;