"use server";

import Email from "@/src/models/email.model";
import { connectDb } from "@/src/shared/libs/db";

export const getEmails = async ({
  newsLetterOwnerId,
}: {
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();
    const emails = await Email.find({ newsLetterOwnerId })
return emails;
  }catch (error) {
    console.log(error);
  };
}
