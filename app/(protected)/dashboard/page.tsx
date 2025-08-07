import { auth } from '@/auth'
import HotQuestionsCard from '@/components/cards/HotQuestionsCard'
import CardList from '@/components/cards/HotQuestionsCard'
import PopularTagsCard from '@/components/cards/PopularTagsCard'
import TodoList from '@/components/cards/TodoList'
import AreaChartComponent from '@/components/charts/AreaChart'
import BarChartComponent from '@/components/charts/BarChart'
import PieChartComponent from '@/components/charts/PieChart'
import React from 'react'



const Dashboard = async () => {
    const session = await auth()
    console.log("Session in Dashboard:", session)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
                <BarChartComponent />
            </div>
            <div className="bg-primary-foreground light-border p-6 shadow-light-300 dark:shadow-none rounded-lg">
                <HotQuestionsCard />
            </div>
            <div className="">
                <PieChartComponent />
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg ">
                <TodoList />
                </div>
            <div className="">
                <AreaChartComponent />
            </div>
            <div className="bg-primary-foreground light-border p-6 shadow-light-300 dark:shadow-none rounded-lg">
                <PopularTagsCard />
            </div>
        </div>
    )
}

export default Dashboard
