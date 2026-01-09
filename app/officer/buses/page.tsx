"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const busesData = [
  {
    id: "4521",
    route: "Route 12 (Downtown)",
    status: "active",
    location: "Central Ave",
    passengers: 47,
    capacity: 60,
    lastUpdate: "2 min ago",
  },
  {
    id: "3821",
    route: "Route 8 (Suburbs)",
    status: "active",
    location: "Park Rd",
    passengers: 52,
    capacity: 60,
    lastUpdate: "1 min ago",
  },
  {
    id: "2145",
    route: "Route 15 (Airport)",
    status: "active",
    location: "Highway",
    passengers: 35,
    capacity: 60,
    lastUpdate: "3 min ago",
  },
  {
    id: "5632",
    route: "Route 3 (Port)",
    status: "inactive",
    location: "Depot",
    passengers: 0,
    capacity: 60,
    lastUpdate: "30 min ago",
  },
]

export default function BusesPage() {
  return (
    <DashboardLayout role="officer" userName="Margaret Chen">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Buses & Routes</h1>
          <p className="text-muted-foreground mt-2">Real-time fleet tracking</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {busesData.map((bus) => (
            <Card key={bus.id} className="gov-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div>
                  <CardTitle className="text-lg">Bus #{bus.id}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{bus.route}</p>
                </div>
                <Badge
                  className={
                    bus.status === "active"
                      ? "bg-green-500/20 text-green-700 dark:text-green-400"
                      : "bg-gray-500/20 text-gray-700 dark:text-gray-400"
                  }
                >
                  {bus.status === "active" ? "Active" : "Inactive"}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span className="font-medium text-foreground">{bus.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Occupancy</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${(bus.passengers / bus.capacity) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        {bus.passengers}/{bus.capacity}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Last Update</span>
                    <span className="text-sm font-medium text-foreground">{bus.lastUpdate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
