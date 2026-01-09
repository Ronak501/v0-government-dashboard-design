import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ShieldCheck, Zap, BarChart3, Lock, Bus, Eye } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">TrustGuard</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="outline">Government Login</Button>
              </Link>
              <Link href="/login">
                <Button className="bg-primary text-primary-foreground hover:opacity-90">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative border-b border-border bg-gradient-to-br from-background via-background to-primary/5 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground mb-6">
            AI-Driven Transparency for Government City Transport
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Detect ticket fraud in real time using computer vision & analytics. Trustworthy, audit-ready, privacy-first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button className="bg-primary text-primary-foreground hover:opacity-90 px-8 py-6 text-lg h-auto">
                Government Login
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" className="px-8 py-6 text-lg h-auto bg-transparent">
                View System Overview
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">Enterprise Features</h2>
            <p className="text-lg text-muted-foreground">Built for government agencies and transport authorities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="gov-card border-border/50 hover:border-primary/30">
              <CardHeader>
                <Eye className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Real-time Passenger Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  AI-powered computer vision detects passengers at each stop and matches against ticket records
                </p>
              </CardContent>
            </Card>

            <Card className="gov-card border-border/50 hover:border-primary/30">
              <CardHeader>
                <Zap className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">Automated Fraud Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Instant detection of discrepancies between passenger count and issued tickets
                </p>
              </CardContent>
            </Card>

            <Card className="gov-card border-border/50 hover:border-primary/30">
              <CardHeader>
                <Lock className="h-8 w-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Role-Based Secure Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Three-tier permission system: Conductors, Officers, and Admins with audit logging
                </p>
              </CardContent>
            </Card>

            <Card className="gov-card border-border/50 hover:border-primary/30">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Audit-Ready Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Comprehensive reporting and PDF exports for government compliance
                </p>
              </CardContent>
            </Card>

            <Card className="gov-card border-border/50 hover:border-primary/30">
              <CardHeader>
                <ShieldCheck className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">Privacy-First AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  No face recognition. Passenger counts only. GDPR and government data standards compliant
                </p>
              </CardContent>
            </Card>

            <Card className="gov-card border-border/50 hover:border-primary/30">
              <CardHeader>
                <Bus className="h-8 w-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Multi-Agency Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Manage multiple city routes, depots, and transport authorities from one platform
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-t border-border bg-card/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-lg bg-muted/50 px-4 py-1 mb-4">
            <p className="text-sm font-medium text-muted-foreground">Enterprise Grade</p>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Privacy-Preserving AI • No Face Recognition • Audit-Ready
          </h3>
          <p className="text-muted-foreground">
            Trusted by government transport authorities. Designed for transparency and compliance.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          <p>&copy; 2025 TrustGuard. Government-grade fraud detection platform.</p>
        </div>
      </footer>
    </div>
  )
}
