"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/chart"
import { useDashboard } from "../hook/useDashboard"

const generateChartConfig = (name: string) => {
    return {
        [name]: {
            label: name,
            color: "#fff",
        },
    } satisfies ChartConfig
}


export function ChartAreaDefault({ chartData }: { chartData: ReturnType<typeof useDashboard>['chartData'] }) {
    const analisys = Object.keys(chartData)


    return (
        <Card className="bg-foreground">
            <CardHeader className="text-primary">
                <CardTitle>Evolução dos KPI`s</CardTitle>

            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" aspect={1} >
                    <ChartContainer config={generateChartConfig(analisys[0])}>
                        <AreaChart
                            accessibilityLayer
                            data={chartData[analisys[0]]}
                        >
                            <CartesianGrid opacity={0.2} stroke="#fff" />
                            <XAxis
                                dataKey="month"
                                axisLine={{ stroke: "#fff", strokeOpacity: 0.2 }}
                                tickMargin={12}
                                tickCount={5}
                                tickSize={1}
                                tick={{ fill: "#fff" }}

                            />
                            <YAxis
                                tick={{ fill: "#fff", }}
                                tickSize={1}
                                tickMargin={12}

                                axisLine={{ stroke: "#fff", strokeOpacity: 0.2, }}
                                dataKey={analisys[0]}
                                scale="linear"
                            />
                            <ChartTooltip
                                cursor={true}
                                content={<ChartTooltipContent indicator="dashed" hideLabel formatter={(value) => `${analisys[0]}: R$ ${value}.00`} />}
                            />

                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#43D2CB" stopOpacity={0.8} />
                                    <stop offset="100%" stopColor="#43D2CB" stopOpacity={0.05} />
                                </linearGradient>

                            </defs>

                            <Area
                                dataKey={analisys[0]}
                                type="natural"
                                fill="url(#colorUv)"
                                fillOpacity={1}
                                isAnimationActive={true}
                                stroke="#fff"
                                strokeOpacity={0}
                            />
                        </AreaChart>
                    </ChartContainer>
                </ResponsiveContainer>
            </CardContent>
        </Card >
    )
}
