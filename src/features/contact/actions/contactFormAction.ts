'use server';

import nodemailer from "nodemailer";
import { z } from "zod";
import { contactFormSchema } from "../schema";

export async function contactFormAction(data: z.infer<typeof contactFormSchema>): Promise<{ success: boolean, message: string }> {
  const { name, email, message, sendCopy } = data;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });


  const sendMailPromise = () => {
    return new Promise<{ success: boolean, message: string }>((resolve, reject) => {
      transport.sendMail({
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        cc: sendCopy ? email : undefined,
        subject: `Message from ${name} (${email})`,
        text: message,
      }, function (err) {
        if (!err) {
          resolve({ success: true, message: "Email sent" });
        } else {
          reject({ success: false, message: "Email failed to send" });
        }
      });
    });
  };
  return sendMailPromise();

}