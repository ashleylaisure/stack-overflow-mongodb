'use client'

import { toggleSaveQuestion } from "@/lib/actions/collection.action";
import { useSession } from "next-auth/react"
import Image from "next/image";
import { use, useState } from "react";
import { toast } from "sonner";

const SaveQuestion = ({questionId, hasSavedQuestionPromise}: {questionId: string, hasSavedQuestionPromise: Promise<ActionResponse<{saved: boolean}>>}) => {
    const session = useSession();
    const userId = session?.data?.user?.id

    const {data} = use(hasSavedQuestionPromise)

    const {saved: hasSaved} = data || {}

    const [isLoading, setIsLoading] = useState(false)

    const handleSave = async () => {
        if (isLoading) return
        if(!userId) 
            return toast.error("You need to be logged in to save a question")

        setIsLoading(true);

        try {
            const {success, data, error} = await toggleSaveQuestion({questionId})

            if(!success) throw new Error (error?.message || "An error occured")

            toast.success(`Question ${data?.saved ? "saved" : "unsaved"}`)

        } catch (error) {
            toast.error(error instanceof Error ? error.message : "There was a problem with your request")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Image
            src={hasSaved? "/icons/star-filled.svg" : "/icons/star-red.svg"}
            width={18}
            height={18}
            alt="save"
            className={`cursor-pointer ${isLoading && 'opacity-50'}`}
            aria-label="Save Question"
            onClick={handleSave}
        />
    )
}

export default SaveQuestion
