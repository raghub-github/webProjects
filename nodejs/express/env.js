import { z, ZodError } from "zod";

const portSchema = z.coerce.number().min(1).max(65535).default(3000);
try {
    const PORT = portSchema.parse(process.env.PORT); 
} catch (error) {
    if (error instanceof ZodError) {
        console.log(error.issues[0].message);
    } else {
        console.log("Unexpected error: ", error);
    };
};