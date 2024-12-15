"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactFormAction } from "../actions/contactFormAction";
import { contactFormSchema } from "../schema";
export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      sendCopy: false,
    },
  });
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("pending");
    const data = form.getValues();
    const response = await contactFormAction(data);
    if (response.success) {
      setFormStatus("success");
    } else {
      setFormStatus("error");
    }
    setTimeout(() => {
      setFormStatus("idle");
      form.reset();
    }, 3000);
  }

  return (
    <section>
      <Card className="relative">
        <Form {...form}>
          <form onSubmit={onSubmit}>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="eg. John Doe"
                        type="text"
                        autoComplete="name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="eg. example@gmail.com"
                        type="email"
                        autoComplete="email"
                        className="bg-transparent"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="eg. I love your portfolio!"
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sendCopy"
                render={({ field }) => (
                  <FormItem className="flex-row items-center gap-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="mt-0">Send me a copy</FormLabel>
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Submit</Button>
            </CardFooter>
          </form>
        </Form>
        <AnimatePresence mode="wait" initial={false}>
          {formStatus === "pending" && (
            <motion.div
              key="pending"
              className="absolute inset-0 flex items-center justify-center rounded-lg bg-primary text-primary-foreground"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold">Sending Email</span>
                <div className="mb-1.5 h-2 w-2 animate-bounce rounded-full bg-foreground [animation-delay:-0.3s]"></div>
                <div className="mb-1.5 h-2 w-2 animate-bounce rounded-full bg-foreground [animation-delay:-0.13s]"></div>
                <div className="mb-1.5 h-2 w-2 animate-bounce rounded-full bg-foreground"></div>
              </div>
            </motion.div>
          )}
          {formStatus === "error" && (
            <motion.div
              key="error"
              className="absolute inset-0 flex items-center justify-center rounded-lg bg-red-500 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">Email Failed! 😢</span>
              </div>
            </motion.div>
          )}
          {formStatus === "success" && (
            <motion.div
              key="success"
              className="absolute inset-0 flex items-center justify-center rounded-lg bg-green-500 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">Email Sent! 🎉</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </section>
  );
}
