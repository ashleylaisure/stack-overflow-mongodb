"use client"

import { incrementViews } from "@/lib/actions/question.action"
import { useEffect } from "react"
import { toast } from "sonner"

const View = ({questionId} : {questionId: string}) => {
    const handleIncrement = async () => {
        const result = await incrementViews({questionId})

        if(result.success) {
            toast.success('Views incremented');
        } else {
            toast.error(result.error?.message || 'Failed to increment views');
        }
    }

    // useEffect runs twice when the component mounts in dev
    // react runs setup and cleanup one extra time before the actual setup
    // causing the incremented count to double
    useEffect(() => {
        handleIncrement();
    }, [])

    return null
}

export default View
