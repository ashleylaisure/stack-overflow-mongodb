import { z } from "zod"

export const AskQuestionSchema = z.object({
    title: z
        .string()
        .min(5, { message: "Title is required" })
        .max(100, { message: "Title must be at most 100 characters long" }),
    content: z
        .string()
        .min(1, { message: "Body is required" }),
    tags: z
        .array(
            z.string()
            .min(1, { message: "Tag is required" })
            .max(30, { message: "Tag cannot exceed 30 characters" })
        )
        .min(1, { message: "At least one tag is required" })
        .max(3, { message: "You can add a maximum of 3 tags" }),
})