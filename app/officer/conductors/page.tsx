"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, Flag, FileText } from "lucide-react"
import { useState } from "react"

const conductorData = [
  {
    id: "C001",
    name: "James Wilson",
    bus: "Bus #4521",
    route: "Route 12",
    passengers: 47,
    tickets: 45,
    mismatch: 4.3,
    trust: 94,
    status: "good",
  },
  {
    id: "C002",
    name: "Maria Garcia",
    bus: "Bus #3821",
    route: "Route 8",
    passengers: 52,
    tickets: 48,
    mismatch: 7.1,
    trust: 88,
    status: "warning",
  },
  {
    id: "C003",
    name: "David Johnson",
    bus: "Bus #2145",
    route: "Route 15",
    passengers: 35,
    tickets: 35,
    mismatch: 0.0,
    trust: 99,
    status: "good",
  },
  {
    id: "C004",
    name: "Sophie Turner",
    bus: "Bus #5632",
    route: "Route 3",
    passengers: 61,
    tickets: 52,
    mismatch: 14.8,
    trust: 72,
    status: "alert",
  },
  {
    id: "C005",
    name: "Ahmed Hassan",
    bus: "Bus #1847",
    route: "Route 9",
    passengers: 43,
    tickets: 42,
    mismatch: 2.3,
    trust: 96,
    status: "good",
  },
]

export default function ConductorsList() {
  const [selectedConductor, setSelectedConductor] = useState<(typeof conductorData)[0] | null>(null)

  const statusConfig: Record<string, { bg: string; text: string; label: string }> = {
    good: { bg: "bg-green-500/10", text: "text-green-700 dark:text-green-400", label: "Good Standing" },
    warning: { bg: "bg-yellow-500/10", text: "text-yellow-700 dark:text-yellow-400", label: "Review Recommended" },
    alert: { bg: "bg-red-500/10", text: "text-red-700 dark:text-red-400", label: "Under Investigation" },
  }

  return (
    <DashboardLayout role="officer" userName="Margaret Chen">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Conductors</h1>
            <p className="text-muted-foreground mt-2">Monitor conductor activity and fraud indicators</p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:opacity-90">Export Data</Button>
        </div>

        {/* Advanced Filters */}
        <Card className="gov-card border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <input
                type="text"
                placeholder="City"
                className="px-3 py-2 rounded-md border border-border bg-input text-foreground text-sm"
              />
              <input
                type="text"
                placeholder="Region"
                className="px-3 py-2 rounded-md border border-border bg-input text-foreground text-sm"
              />
              <input
                type="text"
                placeholder="Depot"
                className="px-3 py-2 rounded-md border border-border bg-input text-foreground text-sm"
              />
              <input
                type="text"
                placeholder="Route"
                className="px-3 py-2 rounded-md border border-border bg-input text-foreground text-sm"
              />
              <select className="px-3 py-2 rounded-md border border-border bg-input text-foreground text-sm">
                <option>Last 1h</option>
                <option>Last 3h</option>
                <option>Last 5h</option>
                <option>Custom</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Conductor Table */}
        <Card className="gov-card border-border/50 overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Conductor List ({conductorData.length})</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-muted/30">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Conductor</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Bus & Route</th>
                    <th className="px-6 py-3 text-center font-semibold text-foreground">Passengers</th>
                    <th className="px-6 py-3 text-center font-semibold text-foreground">Tickets</th>
                    <th className="px-6 py-3 text-center font-semibold text-foreground">Mismatch %</th>
                    <th className="px-6 py-3 text-center font-semibold text-foreground">Trust Score</th>
                    <th className="px-6 py-3 text-center font-semibold text-foreground">Status</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {conductorData.map((conductor) => {
                    const config = statusConfig[conductor.status]
                    return (
                      <tr
                        key={conductor.id}
                        className="border-b border-border hover:bg-muted/30 transition-colors group"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-bold text-primary">
                                {conductor.name.charAt(0)}
                                {conductor.name.split(" ")[1].charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{conductor.name}</p>
                              <p className="text-xs text-muted-foreground">{conductor.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-foreground">{conductor.bus}</p>
                            <p className="text-xs text-muted-foreground">{conductor.route}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <p className="font-semibold text-foreground">{conductor.passengers}</p>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <p className="font-semibold text-foreground">{conductor.tickets}</p>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <p
                            className={`font-semibold ${conductor.mismatch > 10 ? "text-destructive" : conductor.mismatch > 5 ? "text-yellow-600 dark:text-yellow-400" : "text-green-600 dark:text-green-400"}`}
                          >
                            {conductor.mismatch.toFixed(1)}%
                          </p>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <div className="w-full max-w-xs h-2 rounded-full bg-muted overflow-hidden">
                              <div
                                className={`h-full ${conductor.trust > 90 ? "bg-green-600" : conductor.trust > 80 ? "bg-yellow-600" : "bg-red-600"}`}
                                style={{ width: `${conductor.trust}%` }}
                              ></div>
                            </div>
                            <p className="text-xs font-semibold">{conductor.trust}%</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Badge className={`${config.bg} ${config.text}`}>{config.label}</Badge>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              className="p-1.5 hover:bg-muted rounded-md transition-colors"
                              title="Flag for review"
                            >
                              <Flag className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                            </button>
                            <button className="p-1.5 hover:bg-muted rounded-md transition-colors" title="View details">
                              <AlertCircle className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                            </button>
                            <button
                              className="p-1.5 hover:bg-muted rounded-md transition-colors"
                              title="Generate report"
                            >
                              <FileText className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
