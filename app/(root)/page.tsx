import CardList from '@/components/cards/CardList'
import TodoList from '@/components/cards/TodoList'
import AreaChartComponent from '@/components/charts/AreaChart'
import BarChartComponent from '@/components/charts/BarChart'
import PieChartComponent from '@/components/charts/PieChart'
import React from 'react'



const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
                <BarChartComponent />
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg">
                <CardList title="popularContent" />
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
            <div className="bg-primary-foreground p-4 rounded-lg">
                <CardList title="latestTransactions" />
            </div>
        </div>
    )
}

export default Dashboard
