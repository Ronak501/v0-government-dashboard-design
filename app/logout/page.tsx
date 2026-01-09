"use client"

import { useEffect } from "react"

export default function LogoutPage() {
  useEffect(() => {
    // Redirect to login after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = "/login"
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-2">Logging out...</h1>
        <p className="text-muted-foreground">Redirecting to login page</p>
      </div>
    </div>
  )
}
