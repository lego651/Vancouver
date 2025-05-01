"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Code } from "lucide-react"

// Sample data representing monthly revenue
const data = [
  { month: "Apr", value: 55000 },
  { month: "May", value: 55000 },
  { month: "Jun", value: 55000 },
  { month: "Jul", value: 55000 },
  { month: "Aug", value: 55000 },
  { month: "Sep", value: 60000 },
  { month: "Oct", value: 150000 },
  { month: "Nov", value: 220000 },
  { month: "Dec", value: 180000 },
  { month: "Jan", value: 120000 },
  { month: "Feb", value: 90000 },
  { month: "Mar", value: 80000 },
]

export default function RevenueChart() {
  const currentValue = "$41.7k/mo"

  return (
    <Card className="w-full max-w-3xl mx-auto md:col-span-8">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-md bg-black p-2">
            <Code className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">CodeFast</h2>
            <p className="text-muted-foreground">Learn to code in weeks, not years</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 text-violet-500">$</div>
          <span className="font-semibold">{currentValue}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <ChartContainer
          config={{
            revenue: {
              label: "Revenue",
              color: "hsl(47, 82%, 63%)",
            },
          }}
          className="h-[300px] bg-white"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(47, 82%, 63%)" stopOpacity={0.7} />
                  <stop offset="50%" stopColor="hsl(47, 82%, 63%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(47, 82%, 63%)" stopOpacity={0} />
                </linearGradient>
                <filter id="shadow" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                  <feOffset dx="0" dy="4" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.2" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#888", fontSize: 12 }} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888", fontSize: 12 }}
                tickFormatter={(value) => `$${value / 1000}k`}
                domain={[0, "dataMax + 20000"]}
              />
              <Tooltip
                content={
                  <ChartTooltipContent
                    className="bg-white p-2 rounded-md shadow-lg border border-gray-100"
                    formatter={(value) => `$${(value / 1000).toFixed(1)}k`}
                  />
                }
                cursor={{ stroke: "hsl(47, 82%, 63%)", strokeDasharray: "3 3", strokeOpacity: 0.5 }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(47, 82%, 63%)"
                strokeWidth={2.5}
                fill="url(#colorRevenue)"
                fillOpacity={1}
                activeDot={{ r: 6, fill: "hsl(47, 82%, 63%)", stroke: "white", strokeWidth: 2 }}
                filter="url(#shadow)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
