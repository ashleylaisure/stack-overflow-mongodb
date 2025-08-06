'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
    username: z
        .string()
        .min(2, { message: "Username must be at least 2 characters long" })
        .max(50),
    email: z
        .string()
        .email({ message: "Invalid email address" }),
    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 characters long" })
        .max(15, { message: "Phone number must be at most 15 characters long" })
        .optional(),
    location: z
        .string()
        .min(2, { message: "Location must be at least 2 characters long" }),
    role: z.enum(["user", "admin"]),
})

const EditUser = () => {
    // 1. Define your form.
    const userForm = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        username: "",
        email: "",
        phone: "",
        location: "",
        role: "user",
        },
    })

    // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

    return (
        <div>
            <SheetContent>
                <SheetHeader>
                <SheetTitle className="mb-4">Edit User</SheetTitle>
                <SheetDescription asChild>
                    <Form {...userForm}>
                        <form onSubmit={userForm.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={userForm.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="username" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={userForm.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="email" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Please enter a valid email address.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={userForm.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="phone" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Please enter a valid phone number.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={userForm.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location</FormLabel>
                                        <FormControl>
                                            <Input placeholder="location" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Please enter a valid location.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={userForm.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                            <Select>
                                                <SelectTrigger >
                                                    <SelectValue placeholder="Role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="admin">Admin</SelectItem>
                                                    <SelectItem value="user">User</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription>
                                            Only verified users can be Admin.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </div>
    )
}

export default EditUser
