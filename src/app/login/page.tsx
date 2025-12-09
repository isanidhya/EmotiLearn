import { AuthForm } from '@/components/auth/AuthForm';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { PieChart } from 'lucide-react';

export default function AuthenticationPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <header className="text-center mb-8">
          <Link href="/" className="flex items-center gap-2 justify-center mb-4">
            <PieChart className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-primary font-headline">EmotiLearn</h1>
          </Link>
          <p className="text-muted-foreground mt-2">Sign in or create an account to continue.</p>
        </header>
        <Card className="shadow-2xl">
          <CardContent className="p-6">
            <AuthForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
