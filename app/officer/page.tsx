"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Users, Bus, AlertCircle } from "lucide-react"

export default function OfficerDashboard() {
  return (
    <DashboardLayout role="officer" userName="Margaret Chen">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Officer Dashboard</h1>
          <p className="text-muted-foreground mt-2">Real-time system overview and monitoring</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="gov-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Buses</CardTitle>
              <Bus className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">42</div>
              <p className="text-xs text-muted-foreground mt-1">+3 from last hour</p>
            </CardContent>
          </Card>

          <Card className="gov-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conductors On Duty</CardTitle>
              <Users className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">38</div>
              <p className="text-xs text-muted-foreground mt-1">100% operational</p>
            </CardContent>
          </Card>

          <Card className="gov-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Trips Monitored</CardTitle>
              <Activity className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1,247</div>
              <p className="text-xs text-muted-foreground mt-1">Since midnight</p>
            </CardContent>
          </Card>

          <Card className="gov-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alerts Today</CardTitle>
              <AlertCircle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">7</div>
              <p className="text-xs text-muted-foreground mt-1">3 high priority</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="gov-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Quick Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="/officer/conductors"
                className="p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors text-center group"
              >
                <Users className="h-6 w-6 mx-auto mb-2 text-primary group-hover:text-accent transition-colors" />
                <p className="font-medium text-foreground">Conductor List</p>
                <p className="text-xs text-muted-foreground mt-1">View all conductors</p>
              </a>
              <a
                href="/officer/buses"
                className="p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors text-center group"
              >
                <Bus className="h-6 w-6 mx-auto mb-2 text-accent group-hover:text-primary transition-colors" />
                <p className="font-medium text-foreground">Buses & Routes</p>
                <p className="text-xs text-muted-foreground mt-1">Track live status</p>
              </a>
              <a
                href="/officer/reports"
                className="p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors text-center group"
              >
                <AlertCircle className="h-6 w-6 mx-auto mb-2 text-destructive group-hover:text-secondary transition-colors" />
                <p className="font-medium text-foreground">Alerts & Reports</p>
                <p className="text-xs text-muted-foreground mt-1">Review incidents</p>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
