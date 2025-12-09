import { AuthForm } from '@/components/auth/AuthForm';
import { Card, CardContent } from '@/components/ui/card';

export default function AuthenticationPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary font-headline">EmotiLearn</h1>
          <p className="text-muted-foreground mt-2">Understanding Students Beyond Academics.</p>
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
