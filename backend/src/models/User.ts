import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  id: Schema.Types.UUID,
  name: String,
  email: String
});

mongoose.model('user', userSchema);