'use client'
import { Suspense, useEffect, useState } from "react";
import { ChartAreaDefault } from "./components/area-chart";
import { useDashboard } from "./hook/useDashboard";

const Dashboard = ({ chartData }: {
  chartData: ReturnType<typeof useDashboard>['chartData']
}) => {




  return <div className="w-full h-screen pl-40 pt-24 flex justify-baseline items-start" >
    <div className="w-1/3   ">
      <ChartAreaDefault chartData={chartData} />
    </div>
  </div>
}


export default function Page() {
  const { fetchDashboardData = () => { }, chartData } = useDashboard()
  const [isLoadig, setIsLoadig] = useState(false)

  useEffect(() => {
    setIsLoadig(true)
    fetchDashboardData()
    setIsLoadig(false)
  }, [fetchDashboardData])


  return (
    <Suspense fallback={<h1 className="text-primary text-xl">Loading...</h1>}>
      {!isLoadig && <Dashboard chartData={chartData} />}
    </Suspense>
  )
}
