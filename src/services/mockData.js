export const mockCases = [
  {
    id: 'CS001',
    customerName: 'John Doe',
    loanId: 'LN20231001',
    amount: 25000,
    pendingAmount: 15000,
    status: 'Follow-up',
    assignedAgent: 'Sarah Johnson',
    lastContact: '2024-01-15',
    dueDate: '2024-02-01',
    phone: '+1 234-567-8900',
    email: 'john.doe@email.com',
    address: '123 Main St, New York, NY 10001',
    paymentHistory: [
      { date: '2024-01-01', amount: 5000, status: 'Completed' },
      { date: '2023-12-01', amount: 5000, status: 'Completed' }
    ],
    timeline: [
      { date: '2024-01-15', action: 'Follow-up call made', agent: 'Sarah Johnson' },
      { date: '2024-01-10', action: 'Payment reminder sent', agent: 'Sarah Johnson' },
      { date: '2024-01-01', action: 'Case assigned', agent: 'System' }
    ]
  },
  {
    id: 'CS002',
    customerName: 'Jane Smith',
    loanId: 'LN20231002',
    amount: 40000,
    pendingAmount: 35000,
    status: 'Assigned',
    assignedAgent: 'Mike Wilson',
    lastContact: '2024-01-12',
    dueDate: '2024-01-25',
    phone: '+1 234-567-8901',
    email: 'jane.smith@email.com',
    address: '456 Oak Ave, Los Angeles, CA 90001',
    paymentHistory: [
      { date: '2023-12-15', amount: 5000, status: 'Completed' }
    ],
    timeline: [
      { date: '2024-01-12', action: 'Initial contact attempted', agent: 'Mike Wilson' },
      { date: '2024-01-05', action: 'Case assigned', agent: 'System' }
    ]
  },
  {
    id: 'CS003',
    customerName: 'Robert Brown',
    loanId: 'LN20231003',
    amount: 18000,
    pendingAmount: 0,
    status: 'Resolved',
    assignedAgent: 'Sarah Johnson',
    lastContact: '2024-01-10',
    dueDate: '2024-01-20',
    phone: '+1 234-567-8902',
    email: 'robert.brown@email.com',
    address: '789 Pine Rd, Chicago, IL 60601',
    paymentHistory: [
      { date: '2024-01-10', amount: 8000, status: 'Completed' },
      { date: '2023-12-20', amount: 10000, status: 'Completed' }
    ],
    timeline: [
      { date: '2024-01-10', action: 'Full payment received', agent: 'Sarah Johnson' },
      { date: '2024-01-05', action: 'Payment plan agreed', agent: 'Sarah Johnson' },
      { date: '2023-12-15', action: 'Case assigned', agent: 'System' }
    ]
  },
  {
    id: 'CS004',
    customerName: 'Emily Davis',
    loanId: 'LN20231004',
    amount: 30000,
    pendingAmount: 28000,
    status: 'Legal Action',
    assignedAgent: 'Mike Wilson',
    lastContact: '2024-01-08',
    dueDate: '2023-12-30',
    phone: '+1 234-567-8903',
    email: 'emily.davis@email.com',
    address: '321 Elm St, Houston, TX 77001',
    paymentHistory: [
      { date: '2023-11-01', amount: 2000, status: 'Completed' }
    ],
    timeline: [
      { date: '2024-01-08', action: 'Legal notice sent', agent: 'Mike Wilson' },
      { date: '2023-12-20', action: 'Multiple contact attempts failed', agent: 'Mike Wilson' },
      { date: '2023-11-15', action: 'Case assigned', agent: 'System' }
    ]
  },
  {
    id: 'CS005',
    customerName: 'Michael Wilson',
    loanId: 'LN20231005',
    amount: 22000,
    pendingAmount: 16000,
    status: 'Follow-up',
    assignedAgent: 'Sarah Johnson',
    lastContact: '2024-01-14',
    dueDate: '2024-02-05',
    phone: '+1 234-567-8904',
    email: 'michael.wilson@email.com',
    address: '654 Maple Dr, Phoenix, AZ 85001',
    paymentHistory: [
      { date: '2024-01-01', amount: 3000, status: 'Completed' },
      { date: '2023-12-01', amount: 3000, status: 'Completed' }
    ],
    timeline: [
      { date: '2024-01-14', action: 'Payment reminder sent', agent: 'Sarah Johnson' },
      { date: '2024-01-01', action: 'Regular payment received', agent: 'Sarah Johnson' },
      { date: '2023-11-20', action: 'Case assigned', agent: 'System' }
    ]
  }
];

export const mockAgents = [
  {
    id: 'AG001',
    name: 'Sarah Johnson',
    email: 'sarah.j@esolve.com',
    role: 'Senior Agent',
    assignedCases: 12,
    resolvedCases: 8,
    recoveryRate: 85,
    status: 'Active'
  },
  {
    id: 'AG002',
    name: 'Mike Wilson',
    email: 'mike.w@esolve.com',
    role: 'Agent',
    assignedCases: 10,
    resolvedCases: 5,
    recoveryRate: 72,
    status: 'Active'
  },
  {
    id: 'AG003',
    name: 'Lisa Anderson',
    email: 'lisa.a@esolve.com',
    role: 'Agent',
    assignedCases: 8,
    resolvedCases: 6,
    recoveryRate: 80,
    status: 'Active'
  }
];

export const mockActivities = [
  {
    id: 1,
    user: 'Sarah Johnson',
    action: 'Updated case CS001 status to Follow-up',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    type: 'case_update'
  },
  {
    id: 2,
    user: 'Mike Wilson',
    action: 'Added note to case CS002',
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    type: 'note_added'
  },
  {
    id: 3,
    user: 'Admin',
    action: 'Assigned case CS005 to Sarah Johnson',
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    type: 'case_assigned'
  },
  {
    id: 4,
    user: 'Sarah Johnson',
    action: 'Payment received for case CS003',
    timestamp: new Date(Date.now() - 1000 * 60 * 180),
    type: 'payment_received'
  },
  {
    id: 5,
    user: 'Mike Wilson',
    action: 'Sent legal notice for case CS004',
    timestamp: new Date(Date.now() - 1000 * 60 * 240),
    type: 'legal_action'
  }
];

export const getKPIs = () => {
  const totalCases = mockCases.length;
  const resolvedCases = mockCases.filter(c => c.status === 'Resolved').length;
  const totalPendingAmount = mockCases.reduce((sum, c) => sum + c.pendingAmount, 0);
  const avgRecoveryRate = mockAgents.reduce((sum, a) => sum + a.recoveryRate, 0) / mockAgents.length;

  return {
    totalCases,
    resolvedCases,
    pendingAmount: totalPendingAmount,
    agentEfficiency: Math.round(avgRecoveryRate)
  };
};

export const getCaseStats = () => {
  return mockCases.reduce((acc, case_) => {
    acc[case_.status] = (acc[case_.status] || 0) + 1;
    return acc;
  }, {});
};
