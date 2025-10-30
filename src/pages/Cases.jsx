import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';
import { setFilters, setSelectedCase } from '@/store/slices/casesSlice';
import CaseDetailModal from '@/components/CaseDetailModal';

const Cases = () => {
  const dispatch = useDispatch();
  const { cases, filters } = useSelector((state) => state.cases);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredCases = useMemo(() => {
    return cases.filter(c => {
      const matchesSearch = 
        c.customerName.toLowerCase().includes(filters.search.toLowerCase()) ||
        c.loanId.toLowerCase().includes(filters.search.toLowerCase());
      const matchesStatus = filters.status === 'all' || c.status === filters.status;
      return matchesSearch && matchesStatus;
    });
  }, [cases, filters]);

  const paginatedCases = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredCases.slice(start, start + itemsPerPage);
  }, [filteredCases, currentPage]);

  const totalPages = Math.ceil(filteredCases.length / itemsPerPage);

  const getStatusColor = (status) => {
    const colors = {
      'Assigned': 'bg-info/10 text-info',
      'Follow-up': 'bg-warning/10 text-warning',
      'Resolved': 'bg-success/10 text-success',
      'Legal Action': 'bg-destructive/10 text-destructive',
    };
    return colors[status] || 'bg-muted text-muted-foreground';
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Case Management</h1>
          <p className="text-muted-foreground">Track and manage all debt collection cases</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <CardTitle>Cases ({filteredCases.length})</CardTitle>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or loan ID..."
                    className="pl-10"
                    value={filters.search}
                    onChange={(e) => dispatch(setFilters({ search: e.target.value }))}
                  />
                </div>
                <Select
                  value={filters.status}
                  onValueChange={(value) => dispatch(setFilters({ status: value }))}
                >
                  <SelectTrigger className="w-full sm:w-40">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Assigned">Assigned</SelectItem>
                    <SelectItem value="Follow-up">Follow-up</SelectItem>
                    <SelectItem value="Resolved">Resolved</SelectItem>
                    <SelectItem value="Legal Action">Legal Action</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Case ID</th>
                    <th className="text-left p-3 font-medium">Customer</th>
                    <th className="text-left p-3 font-medium">Loan ID</th>
                    <th className="text-left p-3 font-medium">Pending Amount</th>
                    <th className="text-left p-3 font-medium">Status</th>
                    <th className="text-left p-3 font-medium">Agent</th>
                    <th className="text-left p-3 font-medium">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedCases.map(caseItem => (
                    <tr
                      key={caseItem.id}
                      onClick={() => dispatch(setSelectedCase(caseItem))}
                      className="border-b hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <td className="p-3 font-medium">{caseItem.id}</td>
                      <td className="p-3">{caseItem.customerName}</td>
                      <td className="p-3 text-muted-foreground">{caseItem.loanId}</td>
                      <td className="p-3 font-semibold">${caseItem.pendingAmount.toLocaleString()}</td>
                      <td className="p-3">
                        <Badge className={getStatusColor(caseItem.status)}>
                          {caseItem.status}
                        </Badge>
                      </td>
                      <td className="p-3 text-muted-foreground">{caseItem.assignedAgent}</td>
                      <td className="p-3 text-muted-foreground">{caseItem.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <p className="text-sm text-muted-foreground">
                  Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredCases.length)} of {filteredCases.length} cases
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <CaseDetailModal />
    </Layout>
  );
};

export default Cases;
