"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Eye } from "lucide-react"

const reports = [
  { id: 1, title: "Daily Fraud Detection Summary", date: "Today", incidents: 7, status: "high", severity: "warning" },
  {
    id: 2,
    title: "Conductor C002 Investigation Report",
    date: "Yesterday",
    incidents: 3,
    status: "medium",
    severity: "warning",
  },
  { id: 3, title: "Route 12 Weekly Analysis", date: "2 days ago", incidents: 12, status: "high", severity: "alert" },
  { id: 4, title: "System Performance Report", date: "1 week ago", incidents: 0, status: "low", severity: "good" },
]

export default function ReportsPage() {
  return (
    <DashboardLayout role="officer" userName="Margaret Chen">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Reports & Alerts</h1>
          <p className="text-muted-foreground mt-2">Review incidents and generate compliance reports</p>
        </div>

        <div className="space-y-3">
          {reports.map((report) => {
            const severityConfig: Record<string, { bg: string; text: string }> = {
              good: { bg: "bg-green-500/10", text: "text-green-700 dark:text-green-400" },
              warning: { bg: "bg-yellow-500/10", text: "text-yellow-700 dark:text-yellow-400" },
              alert: { bg: "bg-red-500/10", text: "text-red-700 dark:text-red-400" },
            }
            const config = severityConfig[report.severity]

            return (
              <Card key={report.id} className={`gov-card border-border/50 ${config.bg}`}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{report.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {report.date} • {report.incidents} incidents detected
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={`${config.bg} ${config.text}`}>
                      {report.incidents} Issue{report.incidents !== 1 ? "s" : ""}
                    </Badge>
                    <button className="p-2 hover:bg-muted rounded-md transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-md transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}
