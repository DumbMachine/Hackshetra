import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    unique: false
  },
  password: {
    type: String,
    required: true,
    unique: false
  }

});

export default mongoose.model(' Doctor', doctorSchema);
