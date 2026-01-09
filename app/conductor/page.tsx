"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, AlertCircle } from "lucide-react"

export default function ConductorDashboard() {
  return (
    <DashboardLayout role="conductor" userName="James Wilson">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Conductor Dashboard</h1>
          <p className="text-muted-foreground mt-2">Your profile and trip activity</p>
        </div>

        {/* Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="gov-card border-border/50 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">JW</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium text-foreground">James Wilson</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Conductor ID</p>
                  <p className="font-medium text-foreground">CNR-2024-0142</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Govt Employee ID</p>
                  <p className="font-medium text-foreground">GVT-445-8821</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Depot</p>
                  <p className="font-medium text-foreground">Central Bus Depot</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Assigned Bus & Route</p>
                  <p className="font-medium text-foreground">Bus #4521 - Route 12 (Downtown)</p>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-2">Status</p>
                  <Badge className="bg-green-500/20 text-green-700 dark:text-green-400">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activity Summary */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="gov-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Activity Summary</CardTitle>
                <CardDescription>Today's trip statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-muted/30 border border-border/50">
                    <p className="text-3xl font-bold text-foreground">8</p>
                    <p className="text-sm text-muted-foreground mt-1">Trips Completed</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30 border border-border/50">
                    <p className="text-3xl font-bold text-foreground">2h 45m</p>
                    <p className="text-sm text-muted-foreground mt-1">Shift Active Time</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30 border border-border/50">
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">Good</p>
                    <p className="text-sm text-muted-foreground mt-1">System Status</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gov-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">System Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Trip Completed Successfully</p>
                      <p className="text-xs text-muted-foreground mt-1">Your last trip was recorded and verified</p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Trip Under Internal Review</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        One trip is being reviewed as part of routine audit
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Schedule Update</p>
                      <p className="text-xs text-muted-foreground mt-1">Your next shift rotation has been updated</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
