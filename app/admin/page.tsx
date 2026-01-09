"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Cpu, AlertTriangle, Eye } from "lucide-react"

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin" userName="Dr. Robert Singh">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">System Command Center</h1>
          <p className="text-muted-foreground mt-2">AI model health and system infrastructure</p>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="gov-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
              <Activity className="h-4 w-4 text-green-600 dark:text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">99.97%</div>
              <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
            </CardContent>
          </Card>

          <Card className="gov-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cameras Online</CardTitle>
              <Eye className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">284</div>
              <p className="text-xs text-muted-foreground mt-1">2 offline for maintenance</p>
            </CardContent>
          </Card>

          <Card className="gov-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Model Accuracy</CardTitle>
              <Cpu className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">96.8%</div>
              <p className="text-xs text-muted-foreground mt-1">+0.3% this week</p>
            </CardContent>
          </Card>

          <Card className="gov-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Officers</CardTitle>
              <AlertTriangle className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">28</div>
              <p className="text-xs text-muted-foreground mt-1">12 online now</p>
            </CardContent>
          </Card>
        </div>

        {/* AI Model Health */}
        <Card className="gov-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">AI Model Health Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-foreground">FPS (Frames Per Second)</p>
                  <p className="text-sm font-mono font-bold text-primary">28.4 fps</p>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[94%] bg-green-600"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Target: 30 fps</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-foreground">Detection Accuracy</p>
                  <p className="text-sm font-mono font-bold text-primary">96.8%</p>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[96%] bg-green-600"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Baseline: 95%</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-foreground">False Positives</p>
                  <p className="text-sm font-mono font-bold text-primary">2.1%</p>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[21%] bg-yellow-600"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Within acceptable range</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-foreground">Model Confidence Score</p>
                  <p className="text-sm font-mono font-bold text-primary">0.947</p>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-green-600"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Good confidence threshold</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Controls */}
        <Card className="gov-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">System Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                <div>
                  <p className="font-medium text-foreground">Fraud Detection Threshold</p>
                  <p className="text-sm text-muted-foreground">Sensitivity level for alerts</p>
                </div>
                <input type="range" min="0" max="100" defaultValue="75" className="w-32" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                <div>
                  <p className="font-medium text-foreground">Time Window for Analysis</p>
                  <p className="text-sm text-muted-foreground">Minutes per analysis cycle</p>
                </div>
                <select className="px-3 py-2 rounded-md border border-border bg-input text-foreground text-sm">
                  <option>5 minutes</option>
                  <option>10 minutes</option>
                  <option>15 minutes</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                <div>
                  <p className="font-medium text-foreground">Peak Hour Tolerance</p>
                  <p className="text-sm text-muted-foreground">% variance during peak hours</p>
                </div>
                <input type="range" min="0" max="100" defaultValue="20" className="w-32" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
