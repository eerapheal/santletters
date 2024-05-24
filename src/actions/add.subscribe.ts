"use server";

import Subscriber from "@/src/models/subscriber.model";
import { connectDb } from "@/src/shared/libs/db";
import { clerkClient } from "@clerk/nextjs";
import * as EmailValidator from 'email-validator';


export const subscribe = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  try {
    await connectDb();

    // first we need to fetch all users
    const allUsers = await clerkClient.users.getUserList();

    // now we need to find our newsletter owner
    const newsletterOwner = allUsers.find((i) => i.username === username);

    if (!newsletterOwner) {
      throw Error("Username is not vaild!");
    }

    // check if subscribers already exists
    const isSubscriberExist = await Subscriber.findOne({
      email,
      newsLetterOwnerId: newsletterOwner?.id,
    });

    if (isSubscriberExist) {
      return { error: "Email already exists!" };
    }

   // Email validation using validator package
   if (!EmailValidator.validate(email)) {
    return { error: "Email not valid!" };
  }

    // Create new subscriber
    const subscriber = await Subscriber.create({
      email,
      newsLetterOwnerId: newsletterOwner?.id,
      source: "By SantGo website",
      status: "Subscribed",
    });
   
    return subscriber;
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while subscribing." };
  }
};
