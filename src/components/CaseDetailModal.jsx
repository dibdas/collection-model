import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { setSelectedCase, updateCaseStatus, addNote } from '@/store/slices/casesSlice';
import { addActivity } from '@/store/slices/activitiesSlice';
import { Phone, Mail, MapPin, DollarSign, Calendar } from 'lucide-react';
import { toast } from 'sonner';

const CaseDetailModal = () => {
  const dispatch = useDispatch();
  const selectedCase = useSelector((state) => state.cases.selectedCase);
  console.log(selectedCase);
  
  const [newNote, setNewNote] = useState('');
  const [newStatus, setNewStatus] = useState('');

  const handleClose = () => {
    dispatch(setSelectedCase(null));
    setNewNote('');
    setNewStatus('');
  };

  const handleStatusUpdate = () => {
    if (newStatus && selectedCase) {
      dispatch(updateCaseStatus({ id: selectedCase.id, status: newStatus }));
      dispatch(addActivity({
        user: 'Current User',
        action: `Updated case ${selectedCase.id} status to ${newStatus}`,
        type: 'case_update'
      }));
      toast.success('Case status updated');
      // setNewStatus('');
      setTimeout(()=>{    handleClose();},1000)
  
    }
  };

  const handleAddNote = () => {
    if (newNote.trim() && selectedCase) {
      dispatch(addNote({ id: selectedCase.id, note: newNote }));
      dispatch(addActivity({
        user: 'Current User',
        action: `Added note to case ${selectedCase.id}`,
        type: 'note_added'
      }));
      toast.success('Note added successfully');
      setNewNote('');
    }
  };

  if (!selectedCase) return null;

  return (
    <Dialog open={!!selectedCase} onOpenChange={handleClose}>
    
        
<DialogContent className="w-full sm:max-w-md md:max-w-lg lg:max-w-2xl max-h-[80vh] md:max-h-[60vh] overflow-y-auto">

        <DialogHeader>
          <DialogTitle className="flex items-center justify-between px-3">
            <span>Case Details - {selectedCase.id}</span>
            <Badge className="ml-2">
              {newStatus?newStatus:selectedCase.status}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Borrower Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-semibold text-primary">
                        {selectedCase.customerName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{selectedCase.customerName}</p>
                      <p className="text-sm text-muted-foreground">Borrower</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm space-x-4">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedCase.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm space-x-4">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedCase.email}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm space-x-4">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>{selectedCase.address}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Loan Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between p-3 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Loan ID</span>
                    <span className="font-medium">{selectedCase.loanId}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Total Amount</span>
                    <span className="font-semibold">${selectedCase.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-destructive/10 rounded-lg">
                    <span className="text-destructive">Pending Amount</span>
                    <span className="font-bold text-destructive">${selectedCase.pendingAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Due Date</span>
                    <span className="font-medium">{selectedCase.dueDate}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Assigned Agent</span>
                    <span className="font-medium">{selectedCase.assignedAgent}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Update Status</h3>
              <div className="flex gap-4">
                <Select value={newStatus} onValueChange={setNewStatus}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Select new status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Assigned">Assigned</SelectItem>
                    <SelectItem value="Follow-up">Follow-up</SelectItem>
                    <SelectItem value="Resolved">Resolved</SelectItem>
                    <SelectItem value="Legal Action">Legal Action</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={handleStatusUpdate} disabled={!newStatus}>
                  Update
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Add Note</h3>
              <Textarea
                placeholder="Enter note about this case..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                rows={3}
              />
              <Button onClick={handleAddNote} disabled={!newNote.trim()}>
                Add Note
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="payments" className="space-y-3">
            <h3 className="font-semibold">Payment History</h3>
            <div className="space-y-2">
              {selectedCase.paymentHistory.map((payment, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <p className="font-medium">${payment.amount.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">{payment.date}</p>
                    </div>
                  </div>
                  <Badge className="bg-success/10 text-success">{payment.status}</Badge>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-3">
            <h3 className="font-semibold">Case Timeline</h3>
            <div className="space-y-4">
              {selectedCase.timeline.map((event, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    {i < selectedCase.timeline.length - 1 && (
                      <div className="w-px h-full bg-border" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <p className="font-medium">{event.action}</p>
                    <p className="text-sm text-muted-foreground">{event.agent} • {event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default CaseDetailModal;
