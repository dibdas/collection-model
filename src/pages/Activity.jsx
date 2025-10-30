import { useSelector } from 'react-redux';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, FileText, DollarSign, AlertTriangle, UserPlus } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const Activity = () => {
  const activities = useSelector((state) => state.activities.activities);

  const getActivityIcon = (type) => {
    const icons = {
      case_update: FileText,
      note_added: FileText,
      case_assigned: UserPlus,
      payment_received: DollarSign,
      legal_action: AlertTriangle,
    };
    return icons[type] || Clock;
  };

  const getActivityColor = (type) => {
    const colors = {
      case_update: 'bg-primary/10 text-primary',
      note_added: 'bg-info/10 text-info',
      case_assigned: 'bg-success/10 text-success',
      payment_received: 'bg-success/10 text-success',
      legal_action: 'bg-destructive/10 text-destructive',
    };
    return colors[type] || 'bg-muted text-muted-foreground';
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Activity Log</h1>
          <p className="text-muted-foreground">Track all system activities and user actions</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity) => {
                const Icon = getActivityIcon(activity.type);
                return (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${getActivityColor(activity.type)}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">{activity.action}</p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{activity.user}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {activity.type.replace('_', ' ')}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Activity;
