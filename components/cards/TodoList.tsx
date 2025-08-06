'use client'
import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { Card } from '../ui/card'
import { Checkbox } from '../ui/checkbox'
import { format } from "date-fns";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '../ui/button'
import {CalendarIcon } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"

const TodoList = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [open, setOpen] = React.useState(false)

    return (
        <div>
            <h2 className="text-lg font-medium mb-4">Todo List</h2>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon />
                        {date ? format(date, "PPP") : 'Select Date'}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => { setDate(date); setOpen(false); }}
                        className="rounded-lg border"
                    />
                </PopoverContent>
            </Popover>

            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
            <div className="flex flex-col gap-2">
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label htmlFor="todo-1" className="text-sm">Complete the project documentation</label>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label htmlFor="todo-1" className="text-sm">Complete the project documentation</label>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label htmlFor="todo-1" className="text-sm">Complete the project documentation</label>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label htmlFor="todo-1" className="text-sm">Complete the project documentation</label>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label htmlFor="todo-1" className="text-sm">Complete the project documentation</label>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label htmlFor="todo-1" className="text-sm">Complete the project documentation</label>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="todo-1" />
                        <label htmlFor="todo-1" className="text-sm">Complete the project documentation</label>
                    </div>
                </Card>
            </div>
            </ScrollArea>
        </div>
    )
}

export default TodoList
