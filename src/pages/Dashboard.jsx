import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import KPICard from '@/components/KPICard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FileText, CheckCircle, DollarSign, TrendingUp } from 'lucide-react';
import { getKPIs, getCaseStats } from '@/services/mockData';

const Dashboard = () => {
  const [kpis, setKpis] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const kpiData = getKPIs();
    setKpis(kpiData);

    const stats = getCaseStats();
    const formattedData = Object.entries(stats).map(([status, count]) => ({
      status,
      count
    }));
    setChartData(formattedData);
  }, []);

  if (!kpis) return null;

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your debt collection operations</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KPICard
            title="Total Cases"
            value={kpis.totalCases}
            icon={FileText}
            color="primary"
            trend={{ value: '12% from last month', positive: true }}
          />
          <KPICard
            title="Resolved Cases"
            value={kpis.resolvedCases}
            icon={CheckCircle}
            color="success"
            trend={{ value: '8% from last month', positive: true }}
          />
          <KPICard
            title="Pending Amount"
            value={`$${(kpis.pendingAmount / 1000).toFixed(0)}K`}
            icon={DollarSign}
            color="warning"
            trend={{ value: '5% from last month', positive: false }}
          />
          <KPICard
            title="Agent Efficiency"
            value={`${kpis.agentEfficiency}%`}
            icon={TrendingUp}
            color="info"
            trend={{ value: '3% from last month', positive: true }}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Cases by Status</CardTitle>
              <CardDescription>Distribution of cases across different stages</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="status" className="text-xs" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates and actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: 'Case CS001 updated', time: '2 minutes ago', type: 'update' },
                  { action: 'Payment received CS003', time: '15 minutes ago', type: 'payment' },
                  { action: 'New case assigned CS005', time: '1 hour ago', type: 'assigned' },
                  { action: 'Legal notice sent CS004', time: '2 hours ago', type: 'legal' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0">
                    <div className={`h-2 w-2 mt-2 rounded-full ${
                      activity.type === 'payment' ? 'bg-success' :
                      activity.type === 'legal' ? 'bg-destructive' :
                      'bg-primary'
                    }`} />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
