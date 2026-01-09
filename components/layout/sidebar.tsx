"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShieldCheck, BarChart3, Users, Bus, FileText, Settings, Zap, Menu, X } from "lucide-react"

interface SidebarItem {
  name: string
  href: string
  icon: React.ReactNode
  current: boolean
}

interface SidebarProps {
  role: "conductor" | "officer" | "admin"
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const conductorItems: SidebarItem[] = [
    {
      name: "Dashboard",
      href: "/conductor",
      icon: <BarChart3 className="h-5 w-5" />,
      current: pathname === "/conductor",
    },
    {
      name: "Activity",
      href: "/conductor/activity",
      icon: <FileText className="h-5 w-5" />,
      current: pathname === "/conductor/activity",
    },
  ]

  const officerItems: SidebarItem[] = [
    { name: "Dashboard", href: "/officer", icon: <BarChart3 className="h-5 w-5" />, current: pathname === "/officer" },
    {
      name: "Conductors",
      href: "/officer/conductors",
      icon: <Users className="h-5 w-5" />,
      current: pathname === "/officer/conductors",
    },
    {
      name: "Buses & Routes",
      href: "/officer/buses",
      icon: <Bus className="h-5 w-5" />,
      current: pathname === "/officer/buses",
    },
    {
      name: "Reports",
      href: "/officer/reports",
      icon: <FileText className="h-5 w-5" />,
      current: pathname === "/officer/reports",
    },
  ]

  const adminItems: SidebarItem[] = [
    { name: "System Status", href: "/admin", icon: <BarChart3 className="h-5 w-5" />, current: pathname === "/admin" },
    {
      name: "AI Model Health",
      href: "/admin/model",
      icon: <Zap className="h-5 w-5" />,
      current: pathname === "/admin/model",
    },
    {
      name: "User Management",
      href: "/admin/users",
      icon: <Users className="h-5 w-5" />,
      current: pathname === "/admin/users",
    },
    {
      name: "System Config",
      href: "/admin/config",
      icon: <Settings className="h-5 w-5" />,
      current: pathname === "/admin/config",
    },
  ]

  const items = role === "conductor" ? conductorItems : role === "officer" ? officerItems : adminItems

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-card border border-border p-2 rounded-md"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-8">
          {/* Logo */}
          <Link href="/" className="px-6 mb-8 flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-sidebar-primary" />
            <span className="text-lg font-bold text-sidebar-foreground">TrustGuard</span>
          </Link>

          {/* Navigation */}
          <nav className="flex-1 px-4 space-y-1">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  item.current
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-4 py-4 border-t border-sidebar-border">
            <Link
              href="/logout"
              className="flex items-center gap-3 px-4 py-2 text-sm text-sidebar-foreground hover:text-sidebar-accent rounded-md hover:bg-sidebar-accent/50 transition-colors"
            >
              <span>Sign Out</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
