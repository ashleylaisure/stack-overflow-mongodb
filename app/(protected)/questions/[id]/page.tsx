import React from 'react'

const QuestionDetailsPage = async ({params}: RouteParams) => {
    const {id} = await params

    return (
        <div>
            <div>Question Details : {id}</div>
        </div>
    )
}

export default QuestionDetailsPage

