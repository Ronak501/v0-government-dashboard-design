"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock } from "lucide-react"

const activities = [
  { time: "14:30", route: "Route 12", from: "Central Station", to: "Market Square", status: "completed" },
  { time: "13:45", route: "Route 12", from: "Market Square", to: "Hospital", status: "completed" },
  { time: "13:00", route: "Route 12", from: "Downtown", to: "Central Station", status: "completed" },
  { time: "12:15", route: "Route 12", from: "Airport", to: "Downtown", status: "reviewing" },
  { time: "11:30", route: "Route 12", from: "Train Station", to: "Airport", status: "completed" },
]

export default function ConductorActivity() {
  return (
    <DashboardLayout role="conductor" userName="James Wilson">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Trip Activity</h1>
          <p className="text-muted-foreground mt-2">Your completed and pending trips</p>
        </div>

        <Card className="gov-card border-border/50">
          <CardHeader>
            <CardTitle>Today's Trips</CardTitle>
            <CardDescription>8 trips completed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {activities.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-sm font-mono font-bold text-primary">{activity.time}</div>
                    <div>
                      <p className="font-medium text-foreground">{activity.route}</p>
                      <p className="text-sm text-muted-foreground">
                        {activity.from} → {activity.to}
                      </p>
                    </div>
                  </div>
                  <div>
                    {activity.status === "completed" ? (
                      <Badge className="bg-green-500/20 text-green-700 dark:text-green-400">
                        <Check className="h-3 w-3 mr-1" /> Completed
                      </Badge>
                    ) : (
                      <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400">
                        <Clock className="h-3 w-3 mr-1" /> Reviewing
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
