import mongoose from "mongoose";

const { Schema } = mongoose;

const subscriberSchema = new Schema(
  {
    email: {
      type: String,
    },
    newsLetterOwnerId: {
      type: String,
    },
    source: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const Subscriber =
  mongoose.models.Subscribers ||
  mongoose.model("Subscribers", subscriberSchema);

export default Subscriber;
