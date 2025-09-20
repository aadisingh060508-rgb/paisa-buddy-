import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { Wallet, TrendingUp, Shield, Smartphone, LogOut } from 'lucide-react';

const Index = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-background)' }}>
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-primary text-primary-foreground">
              <Wallet className="h-6 w-6" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Paisa Buddy
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {user.email}
            </span>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to Paisa Buddy</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted financial companion for managing expenses, tracking investments, and achieving your financial goals.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-primary/10 text-primary mb-4 w-fit">
                <TrendingUp className="h-8 w-8" />
              </div>
              <CardTitle>Track Expenses</CardTitle>
              <CardDescription>
                Monitor your daily expenses and categorize your spending habits
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-primary/10 text-primary mb-4 w-fit">
                <Shield className="h-8 w-8" />
              </div>
              <CardTitle>Secure Banking</CardTitle>
              <CardDescription>
                Connect your accounts safely with bank-level security
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-primary/10 text-primary mb-4 w-fit">
                <Smartphone className="h-8 w-8" />
              </div>
              <CardTitle>Mobile First</CardTitle>
              <CardDescription>
                Access your finances anywhere with our responsive design
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="border-0 shadow-xl p-8 max-w-2xl mx-auto" 
                style={{ background: 'var(--gradient-primary)' }}>
            <CardContent className="text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to take control?</h3>
              <p className="text-white/90 mb-6">
                Start your financial journey today and make every paisa count.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
