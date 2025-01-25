module.exports = mongoose => {
  const userSchema = mongoose.model(
    'users',
    mongoose.Schema({
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      rol: {
        type: String,
        enum: ['maganer', 'lawyer', 'customer'],
        default: 'customer',
      },
      createdDate: {
        type: Date,
        default: Date.now,
      },
    }, { versionKey: false })
  );

  return userSchema;
}