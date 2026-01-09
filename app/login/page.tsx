"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ShieldCheck, Mail, Lock } from "lucide-react"

export default function LoginPage() {
  const [role, setRole] = useState("officer")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    // Route based on role
    const routes: Record<string, string> = {
      admin: "/admin",
      officer: "/officer",
      conductor: "/conductor",
    }
    window.location.href = routes[role]
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <ShieldCheck className="h-10 w-10 text-primary" />
          <span className="text-2xl font-bold text-foreground">TrustGuard</span>
        </div>
        <p className="text-muted-foreground">Government City Bus Fraud Detection</p>
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-md border-border/50">
        <CardHeader>
          <CardTitle>Secure Login</CardTitle>
          <CardDescription>Select your role and enter credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={role} onValueChange={setRole} className="mb-6">
            <TabsList className="grid w-full grid-cols-3 bg-muted">
              <TabsTrigger value="conductor">Conductor</TabsTrigger>
              <TabsTrigger value="officer">Officer</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@government.gov"
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <Button onClick={handleLogin} className="w-full bg-primary text-primary-foreground hover:opacity-90 py-2">
              Sign In
            </Button>
          </div>

          <div className="mt-6 text-center text-xs text-muted-foreground">
            <p>Demo System • Use any credentials to proceed</p>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
