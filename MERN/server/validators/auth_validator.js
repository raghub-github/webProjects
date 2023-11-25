const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(255, { message: "Name must be atmost 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be atleast 3 characters" })
    .max(255, { message: "Email must be atmost 255 characters" }),
  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number atleast 10 characters" })
    .max(20, { message: "Phone number atmost 20 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(5, { message: "Password must be at least 5 characters" })
    .max(1024, { message: "Password must be at atmost 1024 characters" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be atleast 3 characters" })
    .max(255, { message: "Email must be atmost 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(5, { message: "Password must be at least 5 characters" })
    .max(1024, { message: "Password must be at atmost 1024 characters" }),
});

const contactSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(255, { message: "Name must be atmost 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be atleast 3 characters" })
    .max(255, { message: "Email must be atmost 255 characters" }),
  message: z
    .string({ required_error: "Message is required" })
    .min(5, { message: "Message must be at least 5 characters" })
    .max(1024, { message: "Message must be at atmost 1024 characters" }),
});

module.exports = { signupSchema, loginSchema, contactSchema };
