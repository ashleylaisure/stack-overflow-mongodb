import { auth } from '@/auth'
import QuestionForm from '@/components/forms/QuestionForm'
import ROUTES from '@/constants/routes';
import { getQuestion } from '@/lib/actions/question.action';
import { notFound, redirect } from 'next/navigation';
import React from 'react'

const EditQuestion = async ({params}: RouteParams) => {
    const {id} = await params;
    if(!id) return notFound();

    const session = await auth();
    if (!session) return redirect('/sign-in')

    const {data: question, success} = await getQuestion({questionId: id})
    if (!success) return notFound();

    // confirm the loged in user is the author of the post
    if(question?.author.toString() !== session?.user?.id) redirect(ROUTES.QUESTION_DETAIL(id));

    return (
        <>
            <h1 className="h1-bold text-dark100_light900">Edit Question</h1>
            <div className="mt-9">
                <QuestionForm question={question} isEdit />
            </div>
        </>
    )
    }

export default EditQuestion