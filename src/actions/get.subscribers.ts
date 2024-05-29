"use server";

import Subscriber from "@/src/models/subscriber.model";
import { connectDb } from "@/src/shared/libs/db";

export const getSubscribers = async ({
  newsLetterOwnerId,
}: {
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();

    const subscribers = await Subscriber.find({
      newsLetterOwnerId,
    }).lean();
    return subscribers;
  } catch (error) {
    console.log(error);
  }
};
