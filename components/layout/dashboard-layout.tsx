import type React from "react"
import { Sidebar } from "./sidebar"
import { TopNav } from "./top-nav"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "conductor" | "officer" | "admin"
  userName?: string
}

export function DashboardLayout({ children, role, userName = "User" }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar role={role} />
      <TopNav role={role} userName={userName} />
      <main className="ml-64 pt-6 pb-12 px-6 max-w-7xl">{children}</main>
    </div>
  )
}
