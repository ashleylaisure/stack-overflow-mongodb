import { auth } from '@/auth'
import QuestionCard from '@/components/cards/QuestionCard'
import DataRenderer from '@/components/DataRenderer'
import HomeFilter from '@/components/filters/HomeFilter'
import LocalSearch from '@/components/search/LocalSearch'
import { Button } from '@/components/ui/button'
import ROUTES from '@/constants/routes'
import { EMPTY_QUESTION } from '@/constants/states'
import { getSavedQuestions } from '@/lib/actions/collection.action'
import { getQuestions } from '@/lib/actions/question.action'
import { api } from '@/lib/api'
import handleError from '@/lib/handlers/error'
import { NotFoundError, ValidationError } from '@/lib/http-errors'
import dbConnect from '@/lib/mongoose'
import Link from 'next/link'
import React from 'react'


interface SearchParams {
    searchParams: Promise<{[key: string]: string }>;
}

const CollectionsPage = async ({searchParams} : SearchParams ) => {

    const {page, pageSize, query, filter} = await searchParams;

    const {success, data, error} = await getSavedQuestions({
        page: Number(page) || 1, 
        pageSize: Number(pageSize) || 10, 
        query: query || '', 
        filter: filter || ''
    });

    const {collection} = data || {};

    return (
        <>
            <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>
            </section>
            <section className="mt-11">
                <LocalSearch 
                    route={ROUTES.COLLECTION}
                    imgSrc="/icons/search.svg" 
                    placeholder="Search Questions..." 
                    otherClasses='flex-1' 
                />
            </section>

            <DataRenderer 
                success={success}
                error={error}
                data={collection}
                empty={EMPTY_QUESTION}
                render={(collection) =>
                    <div className="mt-10 flex w-full flex-col gap-6">
                        {collection.map((item) => (
                            <QuestionCard key={item._id} question={item.question} />
                        ))}
                    </div>
                }
            />
        </>
    )
}

export default CollectionsPage