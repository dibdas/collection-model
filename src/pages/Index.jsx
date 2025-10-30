import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, TrendingUp, Users, FileText } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-16">
        {/* <div className="max-w-2xl mx-auto text-center space-y-12"> */}
           <div className="max-w-lg md:max-w-xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                <Shield className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tight">
              Debt Collection Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional case management system for efficient debt recovery operations with real-time analytics and comprehensive workflow management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-card border space-y-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Case Management</h3>
              <p className="text-sm text-muted-foreground">
                Track and manage debt collection cases with comprehensive workflows
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border space-y-3">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold">Real-time Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Monitor KPIs and recovery performance with live data visualization
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border space-y-3">
              <div className="h-12 w-12 rounded-lg bg-info/10 flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-info" />
              </div>
              <h3 className="font-semibold">Agent Management</h3>
              <p className="text-sm text-muted-foreground">
                Assign cases and track agent performance efficiently
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="gap-2">
                <Shield className="h-5 w-5" />
                Access Dashboard
              </Button>
            </Link>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            <p>Frontend Engineer Assessment Project</p>
            <p className="mt-2">Built with React • Redux • Tailwind CSS • Recharts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
