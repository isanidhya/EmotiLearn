import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PieChart, Users, Shield, GraduationCap, Monitor, BarChart } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  const features = [
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: 'For Students',
      description: 'Track your emotional journey, get instant AI-powered support, and access well-being resources anytime.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'For Teachers',
      description: 'Gain real-time insights into your class\'s emotional climate and identify students who may need support.',
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'For Administrators',
      description: 'Monitor school-wide emotional trends, manage stress incidents, and configure system alerts.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-card">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <PieChart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-headline">EmotiLearn</span>
          </Link>
          <Button asChild>
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline">
                  Understanding Students Beyond Academics
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  EmotiLearn is an AI-powered platform that helps educational institutions monitor and support the emotional well-being of their students.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/login">Sign Up for Free</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://picsum.photos/seed/1/600/400"
                alt="Happy students"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                data-ai-hint="happy students learning"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A New Perspective on Student Well-being</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides tailored tools for every role within the educational ecosystem.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              {features.map((feature) => (
                <Card key={feature.title} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="flex flex-col items-center gap-4">
                    {feature.icon}
                    <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 EmotiLearn. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
