"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const users = [
  { id: 1, name: "Margaret Chen", role: "Government Officer", region: "Downtown", status: "active" },
  { id: 2, name: "Robert Singh", role: "System Administrator", region: "Citywide", status: "active" },
  { id: 3, name: "Emily Watson", role: "Government Officer", region: "Suburbs", status: "active" },
]

export default function UsersPage() {
  return (
    <DashboardLayout role="admin" userName="Dr. Robert Singh">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">User Management</h1>
          <p className="text-muted-foreground mt-2">Officers and system administrators</p>
        </div>

        <Card className="gov-card border-border/50 overflow-hidden">
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-muted/30">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Name</th>
                    <th className="px-6 py-3 text-left font-semibold">Role</th>
                    <th className="px-6 py-3 text-left font-semibold">Region</th>
                    <th className="px-6 py-3 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 font-medium">{user.name}</td>
                      <td className="px-6 py-4 text-muted-foreground">{user.role}</td>
                      <td className="px-6 py-4 text-muted-foreground">{user.region}</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-green-500/20 text-green-700 dark:text-green-400">Active</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
