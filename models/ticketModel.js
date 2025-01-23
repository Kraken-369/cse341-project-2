module.exports = mongoose => {
  const ticketSchema = mongoose.model(
    'tickets',
    mongoose.Schema({
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      estado: {
        type: String,
        enum: ['open', 'closed', 'on progress'],
        default: 'open',
      },
      openDate: {
        type: Date,
        default: Date.now,
      },
      lastUpdate: {
        type: Date,
        default: Date.now,
      },
      userOwnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
      },
      userAdvocateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
    }, { versionKey: false })
  );

  return ticketSchema;
}