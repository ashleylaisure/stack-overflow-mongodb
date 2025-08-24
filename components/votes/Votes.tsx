'use client'
import { formatNumber } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { use, useState } from 'react'
import { toast } from 'sonner';
import { createVote } from "@/lib/actions/vote.action";

interface Params {
    targetType: 'question' | 'answer'
    targetId: string
    upvotes: number;
    downvotes: number;
    hasVotedPromise: Promise<ActionResponse<HasVotedResponse>>
}

const Votes = ({upvotes, downvotes, targetId, targetType, hasVotedPromise}: Params) => {
    const session = useSession()
    const userId = session.data?.user?.id

    // The `use` hook can be used to manage promises in a way that avoids blocking server-side rendering, 
    // allowing the server to send immediate responses without waiting for data to be fetched. In contrast, 
    // `useEffect` operates after rendering and may cause delays.
    const {success, data} = use(hasVotedPromise)

    const [isLoading, setIsLoading] = useState(false)

    const {hasUpVoted, hasDownVoted} = data || {}

    const handleVote = async (voteType: 'upvote' | 'downvote') => {
        if (!userId) 
            return toast.error('You must be logged in to vote.');

        setIsLoading(true);

        try {
            const result = await createVote({
                targetId,
                targetType,
                voteType,
            })

            if (!result.success) {
                return toast.error(result.error?.message || "An error occurred while voting. Please Try again later.")
            }

            const successMessage = 
                voteType === 'upvote'
                ? `Upvote ${!hasUpVoted ? "added" : "removed"} successfully`
                : `Downvote ${!hasDownVoted ? "added" : "removed"} successfully`

            toast.success(successMessage)

        } catch (error) {
            toast.error((error as Error).message || 'An error occured while voting. Please try again later');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex-center gap-2.5">
            <div className="flex-center gap-1.5">
                <Image
                    src={success && hasUpVoted? '/icons/upvoted.svg' : '/icons/upvote.svg'}
                    width={18}
                    height={18}
                    alt="upvote"
                    className={`cursor-pointer ${isLoading && 'opacity-50'}`}
                    aria-label="Upvote"
                    onClick={() => !isLoading && handleVote('upvote')}
                />
                <div className="flex-center background-light700_dark400 min-w-5 rounded-sm p-1">
                    <p className="subtle-medium text-dark400_light900">
                        {formatNumber(upvotes)}
                    </p>
                </div>
            </div>

            <div className="flex-center gap-1.5">
                <Image
                    src={success && hasDownVoted? '/icons/downvoted.svg' : '/icons/downvote.svg'}
                    width={18}
                    height={18}
                    alt="downvote"
                    className={`cursor-pointer ${isLoading && 'opacity-50'}`}
                    aria-label="Downvote"
                    onClick={() => !isLoading && handleVote('downvote')}
                />
                <div className="flex-center background-light700_dark400 min-w-5 rounded-sm p-1">
                    <p className="subtle-medium text-dark400_light900">
                        {formatNumber(downvotes)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Votes
